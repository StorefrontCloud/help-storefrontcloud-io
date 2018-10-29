# Debugging build process

If your POD is not responding and is frozen on `Pending` status, you can use the following command to check the build logs:

```
node scripts/cli.js buildLogs --pod=front --ns=yourSpace-storefrontcloud-io
```

This command will display the container init procedure logs - including build logs for Vue Storefront.

<img src="/doc/build-logs.png" />
