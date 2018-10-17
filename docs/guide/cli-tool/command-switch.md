# Switch Namespace

The **Kubernetes Namespace** implies the website You're accesing. By default You're getting two namespaces:

- **instance-storefrontcloud-io** - which is the main, public instance (accesible via **instance.storefrontcloud.io**),
- **instance-test-storefrontcloud-io** - which is the second development/test, instance (accesible via **instance-test.storefrontcloud.io**).

You may switch the instance any time by the following command:

```
node scripts/cli.js namespace
```
<img src="/doc/namespace-command.png" />

As You may observe, after setting the proper namespace `storefrontcloud-cli` is getting the available PODs and storing the PODs cache in the `.storefrontcloud.pods.cache` file.

**Important note:** You may call the commands within different namespaces even without changing the default namespace (`namespace` command). It's possible by just using the `--ns <namespace>` parameter, which is supported by all commands.
