# Switch POD

To switch the current POD, you should run:

```
node scripts/cli.js pod
```

This command will run the interactive UI to switch the POD:

<img src="/doc/switch-pod.png" />

Another option, if you already know your POD name, is to run this command in silent mode:

```
node scripts/cli.js pod --pod=vue-storefront-848799bd5d-zvcd4  
```

This will set the current POD to `vue-storefront-848799bd5d-zvcd4`.
**Note:** You may also switch the POD by using the **role name**. The following command:

```
node scripts/cli.js pod --pod=front  
```

... will also set the current POD to `vue-storefront-848799bd5d-zvcd4`

The current POD, along with the current Namespace name, will be usedwith all subsequent `cli` calls setting the proper context. You may also use the `--pod=<podname>|<rolename>` to switch the POD ad-hoc.
