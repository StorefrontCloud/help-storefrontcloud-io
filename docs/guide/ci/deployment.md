# Deployment

All commits merged to develop branch and all tags are deployed automatically. To the test environment for develop branch and to the production environment for tags. The code below is a standard configuration for the build stage in both Vue Storefront and Vue Storefront API applications, but for the API `frontContainerVersion` is replaced by `apiContainerVersion`.

```
deploy-to-staging:
  stage: deploy
  image: alpine
  script:
    - apk add --no-cache curl
    - >
      curl -H "Content-Type: application/json" -X POST -d "{\"code\":\"{{ instance_name }}-test\", \"frontContainerVersion\":\"${CI_COMMIT_SHA:0:8}\"}" http://10.29.1.1:4000/instances
  environment:
    name: staging
    url: https://{{ instance_name }}-test.storefrontcloud.io/
  only:
    - develop

deploy-to-prod:
  stage: deploy
  image: alpine
  script:
    - apk add --no-cache curl
    - >
      curl -H "Content-Type: application/json" -X POST -d "{\"code\":\"{{ instance_name }}\", \"frontContainerVersion\":\"$CI_COMMIT_TAG\"}" http://10.29.1.1:4000/instances
  environment:
    name: prod
    url: https://{{ instance_domain }}/
  only:
    - tags
```

How read this configuration? For us most importan part is `script` definition. Ther is only call to our tool responsible for deploy by `curl`. The tool is available only for runners on address `http://10.29.1.1:4000/`.