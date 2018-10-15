# Import products from Magento2

Since 1.5 release, Vue Storefront API contains the [`mage2vuestorefront`](https://github.com/DivanteLtd/mage2vuestorefront) data importer instance which can be used to import the data from Your Magento2 instance:

```
node scripts/cli.js import
```

**Please note:** Magento2 API credentials need to be set in the `vue-storefront-api/config/local.json` in Your repository. Please configure the access regarding the [following docs](https://github.com/DivanteLtd/vue-storefront/blob/docs/docs/guide/installation/magento.md) and push to Your [Storefront Cloud Code Access](https://code.storefrontcloud.io).

**Please note:** The mage2vuestorefront data bridge do support many other working modes (for example on-demand indexing). If You're interested in these, please do [contact the Cloud Team](https://help.storefrontcloud.io) to setup the details.
