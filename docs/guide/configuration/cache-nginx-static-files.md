# Nginx Static Files

Cashe for static files is enabled by default for locations `/assets/`, `/dist/` and `/img/`. Cache is valid by 24 hours. Below is presented part of Nginx configuration responsible for static files cache.

```
location /assets/ {
    ...
    expires 1y;
    proxy_cache static;
    proxy_cache_valid 200 24h;
    ...
}
...
location /dist/ {
	  ...
    expires 1y;
    proxy_cache static;
    proxy_cache_valid 200 24h;
    ...
}
...
location c {
	  ...
    proxy_cache static;
    proxy_cache_valid 200 24h;
    ...
}
```

## Clearing Static Files Cache

To clear cache for static files remove Nginx containers.

::: tip
To avoid downtime remove Nginx container one by one.
:::
