
# Restart the app

Storefront Cloud uses the [`pm2`](http://pm2.keymetrics.io/) process manager to run both: `vue-storefront` and `vue-storefront-api`.
To restart the application you may run the following command:

```
node scripts/cli.js pm2 reload all --pod=front
node scripts/cli.js pm2 reload all --pod=api
```

or

```
node scripts/cli.js pm2 reload server --pod=front
node scripts/cli.js pm2 reload api --pod=api
```

**Please note:** The PM2 process manager has been installed on the PODs with the roles of `api` and `front`. You may run:
**Please note:** The PM2 process names are set to: `server` on the `front` POD and `api` on the `api` POD. Additionally, there is the `o2m` PM2 handle running on the `api` PODs to transfer orders between Vue Storefront and Magento2.

<img src="/doc/reload-command.png" />
