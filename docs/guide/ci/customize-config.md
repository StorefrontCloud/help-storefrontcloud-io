# Configuration file in the Cloud

Configuration of your instance application, both the front application and the API application, is managed (merged) by module [node-config](https://github.com/lorenwest/node-config).

For both instances, we crate file `local-cloud.json` which overrides your default configuration. We do it because some parts of your instance configuration in a cloud environment should be constant, e.g., Redis host, ElasticSerach host, API host and API endpoints. The file is named local-cloud.json because the patter for the name is `local-{deployment}.EXT`, and we set `{deployment}` by environment variable $NODE_CONFIG_ENV to `cloud`. To better understand how the name of files should be created and what is the order of merging configuration please read the [module documentation](https://github.com/lorenwest/node-config/wiki/Configuration-Files#multi-instance-deployments)

## local-cloud.json

The default template for the front application, file `local-cloud.json` is below.

```
    {
      "server": {
        "dynamicConfigReload": true,
        "dynamicConfigInclude": [
          "redis",
          "elasticsearch",
          "graphql",
          "cart",
          "products",
          "reviews",
          "orders",
          "users",
          "stock",
          "mailchimp",
          "mailer"
        ]
      },
      "redis": {
        "host": "redis"
      },
      "api": {
        "url": "https://[[your_domain]]"
      },
      "elasticsearch": {
        "host": "/api/catalog"
      },
      "graphql": {
        "host": "https://[[your_domain]]/graphql"
      },
      "cart": {
        "create_endpoint": "https://[[your_domain]]/api/cart/create?token={{ "{{" }}token{{ "}}" }}",
        "updateitem_endpoint": "https://[[your_domain]]/api/cart/update?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId{{ "}}" }}",
        "deleteitem_endpoint": "https://[[your_domain]]/api/cart/delete?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId{{ "}}" }}",
        "pull_endpoint": "https://[[your_domain]]/api/cart/pull?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId{{ "}}" }}",
        "totals_endpoint": "https://[[your_domain]]/api/cart/totals?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId{{ "}}" }}",
        "paymentmethods_endpoint": "https://[[your_domain]]/api/cart/payment-methods?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId{{ "}}" }}",
        "shippingmethods_endpoint": "https://[[your_domain]]/api/cart/shipping-methods?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId{{ "}}" }}",
        "shippinginfo_endpoint": "https://[[your_domain]]/api/cart/shipping-information?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId{{ "}}" }}",
        "collecttotals_endpoint": "https://[[your_domain]]/api/cart/collect-totals?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId{{ "}}" }}",
        "deletecoupon_endpoint": "https://[[your_domain]]/api/cart/delete-coupon?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId{{ "}}" }}",
        "applycoupon_endpoint": "https://[[your_domain]]/api/cart/apply-coupon?token={{ "{{" }}token}}&cartId={{ "{{" }}cartId}}&coupon={{ "{{" }}coupon{{ "}}" }}"
      },
      "products": {
        "endpoint": "https://[[your_domain]]/api/product"
      },
      "reviews": {
        "create_endpoint": "https://[[your_domain]]/api/review/create"
      },
      "orders": {
        "endpoint": "https://[[your_domain]]/api/order"
      },
      "users": {
        "endpoint": "https://[[your_domain]]/api/user",
        "history_endpoint": "https://[[your_domain]]/api/user/order-history?token={{ "{{" }}token{{ "}}" }}",
        "resetPassword_endpoint": "https://[[your_domain]]/api/user/resetPassword",
        "changePassword_endpoint": "https://[[your_domain]]/api/user/changePassword?token={{ "{{" }}token{{ "}}" }}",
        "login_endpoint": "https://[[your_domain]]/api/user/login",
        "create_endpoint": "https://[[your_domain]]/api/user/create",
        "me_endpoint": "https://[[your_domain]]/api/user/me?token={{ "{{" }}token{{ "}}" }}",
        "refresh_endpoint": "https://[[your_domain]]/api/user/refresh"
      },
      "stock": {
        "endpoint": "https://[[your_domain]]/api/stock"
      },
      "mailchimp": {
        "endpoint": "https://[[your_domain]]/api/ext/mailchimp-subscribe/subscribe"
      },
      "mailer": {
        "endpoint": {
          "send": "https://[[your_domain]]/api/ext/mail-service/send-email",
          "token": "https://[[your_domain]]/api/ext/mail-service/get-token"
        }
      }
    }
```

By default template for API application file `local-cloud.json` is an empty JSON `{}`.

For both files, the configuration can change. Always, the config file for your instance is available in pods. You can check it using CLI tool or directly using kubeconfig. 

## Overreading configuration

If for some reason, the default configuration is not sufficient for you, you can override it by file create according to the pattern `local- {deployment} - {instance} .EXT`. `{deployment}` value is always `cloud`. Default value of `{instance}` is `prod`. In case when you have more than one instance it can be `stage` or` test`. You can check it by running command `echo $ NODE_APP_INSTANCE` on the pods of your instance.