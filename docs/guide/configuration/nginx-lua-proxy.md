# Nginx Lua Proxy

In case when you use [SSR cache](https://docs.vuestorefront.io/guide/basics/ssr-cache.html) in your instance you can speed up your instance by using Nginx Lua Proxy.

## What is Nginx Lua Proxy?

Nginx Lua Proxy is a reverse proxy based on [OpenResty](http://openresty.org/en/) serving cached pages directly from Redis without Vue StoreFront, both VSF and VSF API, calls, using [Lua](https://www.lua.org/).

Building the Nginx Lua Proxy we based on [Vue StoreFront proxy](https://github.com/ClickAndMortar/docker/tree/master/vue-storefront/proxy).

## Requirements

Patch of file `core/scripts/server.[js|ts]` is required. You should add changes like below:

```
...

const fs = require('fs')

function cacheVersion (req, res) {
  res.send(fs.readFileSync(resolve('core/build/cache-version.json')))
}

app.get('/cache-version.json', cacheVersion)

...

```

::: warning
Nginx Lua Proxy works only with Redis DB0!

If you want to use it please set `db: 0` in your instance configuration. More information about Redis configuration you can find in [Vue Storefront documentation](https://docs.vuestorefront.io/guide/basics/configuration.html#redis).
:::

::: tip
To enable Nginx Lua Proxy on your instance please contact us.
:::