# Deploy code to POD

Storefront Cloud PODs are configured to deploy the code in the initialization procedure. 
**Note:** Please note that Your code is available under [Storefront Cloud Code Access (Web+Git)](https://code.storefrontcloud.io) via credentials provided by the Cloud Team.

That being said - the deployment = restart the POD. Our Kubernetes configuration works with the zero-downtime configuration.

You may find two repositories in there:

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> - which **master** branch is used to deploy the production frontend and **develop** branch is used to deploy the test frontend,
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> - which **master** branch is used to deploy the production API and **develop** branch is used to deploy the test API.

The namespaces are bound to the public URL addresses:

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> is deployed under <a href="https://demo.storefrontcloud.io">demo.storefrontcloud.io</a>
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> is deployed under <a href="https://demo.storefrontcloud.io/api">demo.storefrontcloud.io/api</a>


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