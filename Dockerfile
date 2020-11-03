FROM node:12 AS build

WORKDIR /var/www

COPY . .

RUN npm install \
	 && npm run docs:build

FROM nginx

COPY --from=build /var/www/docs/.vuepress/dist /usr/share/nginx/html

# # abort on errors
# set -e

# # build
# npm run docs:build

# # navigate into the build output directory
# cd docs/.vuepress/dist

# # if you are deploying to a custom domain
# echo 'help.storefrontcloud.io' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# # if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:StorefrontCloud/help-storefrontcloud-io.git master:gh-pages

# cd -
