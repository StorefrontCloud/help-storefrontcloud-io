# Debugging build process

If Your POD is not responding and freezed on `Pending` status You can use the following command to check the build logs:

```
node scripts/cli.js buildLogs --pod=front --ns=yourSpace-storefrontcloud-io
```

This command will display the container init procedure logs - including build logs for Vue Storefront.

<img src="/doc/build-logs.png" />