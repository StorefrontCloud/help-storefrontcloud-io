# Import products from Magento2

Since 1.5 release, the Vue Storefront API contains the [`mage2vuestorefront`](https://github.com/DivanteLtd/mage2vuestorefront) data importer instance which can be used to import the data from your Magento2 instance:

```
node scripts/cli.js import
```

**Please note:** Magento2 API credentials need to be set in the `vue-storefront-api/config/local.json` in your repository. Please configure access according to the [following docs](https://github.com/DivanteLtd/vue-storefront/blob/docs/docs/guide/installation/magento.md) and push to your [Storefront Cloud Code Access](https://code.storefrontcloud.io).

**Please note:** The mage2vuestorefront data bridge supports many other working modes (for example on-demand indexing). If you're interested in these, please [contact the Cloud Team](https://help.storefrontcloud.io) to set up the details.
