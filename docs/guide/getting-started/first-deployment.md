# First Deployment

Before Your code changes will be visible in the Public Internet You need to deploy them from Your Repository.

**Note:** We strongly recommend You to use the **develop** branch for development + tests and the **master** branch of Your Storefront Cloud repositories to deploy the stable releases.

You may find two repositories [in there](https://code.storefrontcloud.io):

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> - which **master** branch is used to deploy the production frontend and **develop** branch is used to deploy the test frontend,
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> - which **master** branch is used to deploy the production API and **develop** branch is used to deploy the test API.

The namespaces are bound to the public URL addresses:

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> is deployed under <a href="https://demo.storefrontcloud.io">demo.storefrontcloud.io</a>
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> is deployed under <a href="https://demo.storefrontcloud.io/api">demo.storefrontcloud.io/api</a>

## Deployment procedure

To deploy the code changes, please:

- do check if all changes are commited to the right branch (develop for **theinstance-test.storefrontcloud.io**, master for **theinstance.storefrontcloud.io**),
- execute the CLI tool [deploy command](../cli-tool/command-deploy.html).

To deploy the changes to **demo.storefrontcloud.io** You may run:

```
node scripts/cli.js deploy --pod=front
```

To deploy the changes to **demo.storefrontcloud.io/api** You may run:

```
node scripts/cli.js deploy --pod=api
```

This command is about to execute the following sequence of steps:
- create new instance of the selected role's container,
- run the initialization + deployment procedure,
- kill the old container whenever the new one is up and running,
- select the new container as the default one.

<img src="/doc/deploy-command.png" />