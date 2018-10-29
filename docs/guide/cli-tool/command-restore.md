# Restore ElasticSearch data dump

To restore the data dumped with the `dump` command please run: 

```
node scripts/cli.js restore --input=catalog.json
```

By executing the ElasticSearch data restore, Storefront Cloud CLI will execute the following sequence of commands:

- transfer the file using `kubectl cp` to localhost,
- use elasticdump to restore the data to the `var/catalog.json` on the server,

<img src="/doc/restore-command.png" />
