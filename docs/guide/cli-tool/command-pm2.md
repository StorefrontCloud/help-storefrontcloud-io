# Run the PM2 process manager

Storefront Cloud uses the [`pm2`](http://pm2.keymetrics.io/) process manager to run both: `vue-storefront` and `vue-storefront-api`.

You may use most of the standard PM2 features by running:

```
node scripts/cli.js pm2 --pod=front
```

or

```
node scripts/cli.js pm2 --pod=api
```
