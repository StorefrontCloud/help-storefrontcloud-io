# CI Stages

In `.gitlab-ci.yml` are defined as four stages of continuous integration for your projects.

```
stages:
  - test
  - build
  - deploy
  - deploy-check
```

## Test

In this stage are running unit tests and static code analysis.

```
sca:
  stage: test
  image: node:10
  script:
    - yarn install
    - yarn lint

unit:
  stage: test
  image: node:10
  script:
    - yarn install
    - yarn test:unit
```

## Build

This stage is responsible for building a docker image with the application. More information is in dedicated [article](build-docker-image.html).

```
build:
  stage: build
  image:
    name: gcr.io/kaniko-project/executor:debug
    entrypoint: [""]
  script:
    - echo "{\"auths\":{\"$REGISTRY_URL\":{\"username\":\"$REGISTRY_USER\",\"password\":\"$REGISTRY_PASSWORD\"}}}" > /kaniko/.docker/config.json
    - TAG=${CI_COMMIT_SHA:0:8}
    - if [ -n "$CI_COMMIT_TAG" ]; then TAG=$CI_COMMIT_TAG; fi
    - /kaniko/executor --context $CI_PROJECT_DIR --dockerfile $CI_PROJECT_DIR/dev/docker/Dockerfile --destination $REGISTRY_IMAGE:$TAG
  only:
    - develop
    - tags
```

## Deployment

The next stage is deployed to the test environment or the production environment. It is a simple API call to our tool responsible for the deploy and it only triggers deploy. Information about success is in the next stage. More information is in dedicated [article](deployment.html).

```
deploy-to-staging:
  stage: deploy
  image: alpine
  script:
    - apk add --no-cache curl
    - >
      curl -H "Content-Type: application/json" -X POST -d "{\"code\":\"demo-test-storefrontcloud-io\", \"frontContainerVersion\":\"${CI_COMMIT_SHA:0:8}\"}" http://10.29.1.1:4000/instances
  environment:
    name: staging
    url: https://demo-test.storefrontcloud.io/
  only:
    - develop
```

## Deploy Check

In this stage we confir if deployment success.
```
deploy-to-staging-check:
  stage: deploy-check
  image:
    name: registry.storefrontcloud.io/deploy-checker
    entrypoint: ["/bin/bash"]
  script:
    - cd /usr/src/app
    - echo $KUBE_CONFIG_TEST | base64 --decode > /tmp/kubeconfig
    - bundle exec ruby deploy_checker.rb --tag ${CI_COMMIT_SHA:0:8} --kubeconfig /tmp/kubeconfig --namespace cletile-test-us-east-1-aws-storefrontcloud-io
  only:
    - develop

```