# Transfer files and directories between localhost and containers

To transfer files TO and FROM any POD in Your namespace please do use the following command:

```
node scripts/cli.js cp api:var/catalog.json catalog-copy.json
```

This command will copy the `var/catalog.json` file from the container with the role `api` to local file named `catalog-copy.json`. You can do the reverse operation (uploading the local file) with the following command:

```
node scripts/cli.js cp catalog-copy.json api:var/catalog.json 
```

**Note:** You may transfer the whole folders (both sides) with the same shell calls as presented above.
