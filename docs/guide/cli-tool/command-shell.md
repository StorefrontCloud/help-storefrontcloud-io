# Execute remote shell

To execute the remote shell please use the following command:

```
node scripts/cli.js exec --pod=api -- sh
```

<img src="/doc/shell-command.png" />

The `sh` shell will be used. 
**Important note:** Please note that the storage mounted to the container is volatile. That means that with each deployment, it is erased and deployed from <a href="https://code.storefrontcloud.io">**Storefront Cloud Code Access**</a>

Please **DO NOT** modify any files directly.
To exit the shell please type `exit` or use `Ctrl+D`.
