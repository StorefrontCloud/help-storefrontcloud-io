# Make ElasticSearch data dump

We are using the [elasticdump](https://www.npmjs.com/package/elasticdump) configured along with the `vue-storefront-api` container to perform the ElasticSearch data dumps. By default the index used in the `vue-storefront-api:config/local.json:elasticsearch.indices` us backed up. Typically it's `vue_storefront_catalog`.

The Storefront Cloud CLI by executing the ElasticSearch data dump will execute the following sequence of commands:

- use elasticdump to dump the data to the `var/catalog.json` on the server,
- transfer the file using `kubectl cp` to localhost.

The command:
```
node scripts/cli.js dump --output=catalog.json
```

<img src="/doc/backup-command.png" />

**Note:** The data dump command works only on the PODs with the `api` role. The command will try to guess the POD name until the `--pod=` switch will be used.
