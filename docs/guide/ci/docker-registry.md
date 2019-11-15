# Docker Registry

All images generated in the build process are stored in our [Docker Registry](https://docs.docker.com/registry/). Access to the registry is limited only for the Storefront Cloud users. Registry is available under address [registry.storefrontcloud.io](registry.storefrontcloud.io/).

By default images are tagged by git hash, ex: `registry.storefrontcloud.io/demo-storefrontcloud-io/vue-storefront:dc7b0af2`. Only for git tags images are tagged by git tag `registry.storefrontcloud.io/demo-storefrontcloud-io/vue-storefront:1.2.3`. It is managed by CI and configuration is in `.gitlab-ci.yml` file, default configuration is like below.

```
  script:
    - echo "{\"auths\":{\"$REGISTRY_URL\":{\"username\":\"$REGISTRY_USER\",\"password\":\"$REGISTRY_PASSWORD\"}}}" > /kaniko/.docker/config.json
    - TAG=${CI_COMMIT_SHA:0:8}
    - if [ -n "$CI_COMMIT_TAG" ]; then TAG=$CI_COMMIT_TAG; fi
    - /kaniko/executor --context $CI_PROJECT_DIR --dockerfile $CI_PROJECT_DIR/dev/docker/Dockerfile --destination $REGISTRY_IMAGE:$TAG
```

## Access Data

Login and password are stored as GitLab Variables in project configuration as variable `REGISTRY_USER` and `REGISTRY_PASSWORD`.

![ci-docker-registr.png](/doc/ci-docker-registr.png)

## Images Live Time

All images with a tag other than compatible with [Semantic Versioning](https://semver.org/) are removed after 30 days.

How does it work? Look at the examples below.

| tag       | live time |
|-----------|-----------|
| dc7b0af2  | 30 days   |
| 1.1.1.1   | 30 days   |
| some_name | 30 days   |
| 1.3.4-dev | 30 days   |
| 1.2.4     | forever   |
| 3.4.2     | forever   |

**Important note:** For the production environment only tags compatible with Semantic Versioning should be used.