# Monitor the app

Storefront Cloud uses the [`pm2`](http://pm2.keymetrics.io/) process manager to run both: `vue-storefront` and `vue-storefront-api`.
Please take a look at the [PM2 monitoring features](http://pm2.keymetrics.io/docs/usage/monitoring/).

The following commands may be used to monitor the app:

```
node scripts/cli.js pm2 logs server --pod=front
node scripts/cli.js pm2 logs api --pod=api
```

To enter the interactive monitoring tool please use:

```
node scripts/cli.js pm2 monit server --pod=front
node scripts/cli.js pm2 monit api --pod=api
```

<img src="/doc/logs-command.png" />
