# First Deployment

Before your code changes are visible to the Public internet, you need to deploy them from your Repository.

**Note:** We strongly recommend that you use the **develop** branch for development + tests and the **master** branch of your Storefront Cloud repositories to deploy stable releases.

You may find two repositories [in there](https://code.storefrontcloud.io):

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> - where the **master** branch is used to deploy the production frontend and the **develop** branch is used to deploy the test frontend,
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> - where the **master** branch is used to deploy the production API and the **develop** branch is used to deploy the test API.

The namespaces are bound to the public URL addresses:

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> is deployed under <a href="https://demo.storefrontcloud.io">demo.storefrontcloud.io</a>
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> is deployed under <a href="https://demo.storefrontcloud.io/api">demo.storefrontcloud.io/api</a>

## Deployment procedure

To deploy the code changes, please:

- check if all changes have been committed to the right branch (develop for **theinstance-test.storefrontcloud.io**, master for **theinstance.storefrontcloud.io**),
- execute the CLI tool [deploy command](../cli-tool/command-deploy.html).

To deploy the changes to **demo.storefrontcloud.io** you may run:

```
node scripts/cli.js deploy --pod=front
```

To deploy the changes to **demo.storefrontcloud.io/api** you may run:

```
node scripts/cli.js deploy --pod=api
```

This command will execute the following sequence of steps:
- create a new instance of the selected role's container,
- run the initialization + deployment procedure,
- kill the old container whenever the new one is up and running,
- select the new container as the default one.

<img src="/doc/deploy-command.png" />
