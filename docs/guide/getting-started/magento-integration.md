# Magento integration

Storefront Cloud offers You special Command Line tool to import the data from Your Magento2 instance. 
Before that we need to configure Your Magento2 instance to provide us with the **oauth2** credentials, required to run the API requests.

## Magento API configuration

The tool is using Magento2 API via OAuth authorization, so you need to prepare Magento Integration access at first. Go to your Magento2 admin panel and click: _System -> Integrations_

![Magento Admin Panel](/doc/magento_1.png)

Then click _Add new integration_ and just fill:

- name (whatever)
- your password to confirm the changes,
- check Catalog, Sales, My Account and Carts on API permissions tab — save

![Magento API](/doc/magento_2.png)

In the result you’ll click _Activate_ and get some oauth access tokens:

![Magento tokens](/doc/magento_3.png)

Now please **create and edit** the `config/local.js` file in your **api repository** and modify the following section:
<img src="/doc/create-config.png" alt="You may create new local config file using Gitlab" />

```json
{
  "magento2": {
    "url": "http://magento2.demo-1.xyz.com",
    "imgUrl": "http://localhost:8080/media/catalog/product",
    "assetPath": "/../var/magento2-sample-data/pub/media",
    "magentoUserName": "",
    "magentoUserPassword": "",
    "httpUserName": "",
    "httpUserPassword": "",
    "api": {
      "url": "http://demo-magento2.vuestorefront.io/rest",
      "consumerKey": "byv3730rhoulpopcq64don8ukb8lf2gq",
      "consumerSecret": "u9q4fcobv7vfx9td80oupa6uhexc27rb",
      "accessToken": "040xx3qy7s0j28o3q0exrfop579cy20m",
      "accessTokenSecret": "7qunl3p505rubmr7u1ijt7odyialnih9"
    }
  },
  "imageable": {
    "namespace": "",
    "maxListeners": 512,
    "imageSizeLimit": 1024,
    "whitelist": {
      "allowedHosts": [
        ".*divante.pl",
        ".*vuestorefront.io"
      ]
    },
    "cache": {
      "memory": 50,
      "files": 20,
      "items": 100
    },
    "concurrency": 0,
    "counters": {
      "queue": 2,
      "process": 4 
    },
    "simd": true,
    "keepDownloads": true
  },
}
```

<img src="/doc/edit-magento-config.png" alt="You may create edit local config file using Gitlab" />

## Execute the import

It’s safe to run these commands over and over as they’re doing `upsert` operation  - so inserts or updates the existing records.
To execute the import script You should use our [Command line tool](https://github.com/StorefrontCloud/storefrontcloud-cli) and perform the `import` operation:

```
node scripts/cli.js import
```

[Read more](../cli-tool/command-import.html) on import command...

## Advanced scenarios

Storefront Cloud is using the [mage2vuestorefront](https://github.com/DivanteLtd/mage2vuestorefront) to execute the Magento synchronization. This tool offers way more syncing scenarios: for example on-demand indexing or delta-main indexing schemas. Please do [contact us](mailto:support@storefrontcloud.io) for details.