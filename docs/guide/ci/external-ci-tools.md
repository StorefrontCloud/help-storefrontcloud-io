# Using External CI/CD

There is a possibility to deploy Vue Storefront application from the external CI/CD tool.

The most important thing to work with external CI/CD is to build a docker image and push them to Storefront Cloud Docker Registry. More information about this step you can find in dedicated articles: [Build Docker image](build-docker-image.html), [Docker Registry](docker-registry.html).

The second important thing is to deploy by Storefront Cloud API. API is available under farmer.storefrontcloud.io domain. To call API from the Internet necessary is login and pass (if you don't have please write to us). The deployment process is similar to deploy from our GitLab and is described in dedicated [article](deployment.html)

## Examples

### Travis-CI

Below is an example configuration for [Travis CI](https://www.travis-ci.org/). It should be placed in `.travis-ci.yaml` file.

```
sudo: required
language: node_js

cache:
  yarn: true
  directories:
    - node_modules

env:
  global:
    - COMMIT=${TRAVIS_COMMIT::8}

install:
  - yarn

services:
  - docker

jobs:
  include:
    - build_image:
      name: "Build docker image"
      stage: docker_build
      node_js: "10"
      script:
        - docker build -t registry.storefrontcloud.io/instance-name-storefrontcloud-io/vue-storefront:$COMMIT -f dev/docker/Dockerfile .
        - echo $DOCKER_PASSWORD | docker login  -u="$DOCKER_USERNAME" --password-stdin registry.storefrontcloud.io
        - docker push registry.storefrontcloud.io/instance-name-storefrontcloud-io/vue-storefront:$COMMIT

    - deploy_to_storefrontcloud:
      name: "Deploy to StorefrontCloud"
      stage: deploy
      node_js: "10"
      script:
        - "curl -u $CLOUD_USERNAME:$CLOUD_PASSWORD -H 'Content-Type: application/json' -X POST -d \"{\\\"code\\\":\\\"instance-name\\\", \\\"frontContainerVersion\\\":\\\"$COMMIT\\\"}\" https://farmer.storefrontcloud.io/instances"
```