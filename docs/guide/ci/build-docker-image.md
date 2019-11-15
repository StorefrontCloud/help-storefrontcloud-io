# Build docker image

## Building images with Kaniko and GitLab CI/CD

[Docker-in-docker builds](https://docs.gitlab.com/ee/ci/docker/using_docker_build.html#use-docker-in-docker-workflow-with-docker-executor) requires privileged mode in order to function, which is a significant security concern and because of that, we recommend using [kaniko](https://github.com/GoogleContainerTools/kaniko) to build docker images. On the Storefront Cloud CI is configured to use Kaniko by default. More information about GitLab and Kaniko you can find in [GitLab documentation](https://docs.gitlab.com/ee/ci/docker/using_kaniko.html)

## Building image for Vue Storefront and Vue Storefront API

The code below is a standard configuration for the build stage in both Vue Storefront and Vue Storefront API applications.

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

How read this configuration? Let's focus on the `script` definition. In the first line of the `script` definition is created a file with access data to our [Docker Registry](https://docs.docker.com/registry/) where all images are stored. Access to the Docker Registry is limited, user and pass are variables stored in GitLab, about our Docker Registry is separated [article](docker-registry.html). In the second line is created docker tag name. In the third line is chacked if is git tag (deploy on prod is limited only to tagged versions, [read more](deployment.html)). In the last line, the docker image is built. As you can see docker image is built from `Dockerfile` which is part of the application code and is stored in directory `dev/docker/Dockerfile`. This job is running only for branch `develop` or for git tag.
