# Cache for static content

For two locations `/img` and `/assets` cache for static content is enabled. It is Nginx cache for static content and is configured by definioton like below.

```
proxy_cache static;
proxy_cache_valid 200 24h;
```

## Flush cache

To flush cache for static content delete pod with Nginx. It can be done by `kubectl` command or Storefront Cloud CLI tool.

### kubectl

List all pods by command `kubectl --kubeconfig path/to/kube.config -n project-storefrontcloud-io get pod`

```
NAME                                     READY   STATUS    RESTARTS   AGE
NAME                                  READY   STATUS      RESTARTS   AGE
backups-1583818800-vpdxs              0/1     Completed   0          2d7h
backups-1583905200-mn7m8              0/1     Completed   0          31h
backups-1583991600-fff52              0/1     Completed   0          7h42m
elasticsearch-0                       1/1     Running     0          9d
elasticsearch-1                       1/1     Running     0          9d
elasticsearch-2                       1/1     Running     0          9d
nginx-7789b4b968-6rz86                1/1     Running     0          3h20m
nginx-7789b4b968-l5zhm                1/1     Running     0          3h19m
redis-7684cb956c-qx922                1/1     Running     0          19d
vue-storefront-66f456c499-qtr6c       1/1     Running     15         19d
vue-storefront-66f456c499-w44wb       1/1     Running     7          19d
vue-storefront-api-5f8cc5c7f7-96gmf   1/1     Running     0          3d5h
vue-storefront-api-5f8cc5c7f7-htrnl   1/1     Running     0          3d5h
```

Find Nginx pods, in the example above Nginx pods are pod `nginx-7789b4b968-6rz86` and pod `nginx-7789b4b968-l5zhm` and remove them by command:

```
kubectl  --kubeconfig path/to/kube.config -n project-storefrontcloud-io delete pod nginx-7789b4b968-6rz86 nginx-7789b4b968-l5zhm
```

### Storefront Cloud CLI
List all pods by command `node scripts/cli.js pods`

```
┌─────────────────────────────────────────────┬──────────┬──────────┬─────────────────────────┐
│ POD name                                    │ Role     │ State    │ Start time              │
├─────────────────────────────────────────────┼──────────┼──────────┼─────────────────────────┤
│ elasticsearch-75cf68b6b7-thjsx              │ elastic  │ Running  │ 2018-10-12T11:36:05Z    │
├─────────────────────────────────────────────┼──────────┼──────────┼─────────────────────────┤
│ kibana-69777f68b-dd6s5                      │          │ Running  │ 2018-10-09T13:24:06Z    │
├─────────────────────────────────────────────┼──────────┼──────────┼─────────────────────────┤
│ nginx-6d68c9557-l67l2                       │ nginx    │ Running  │ 2018-10-09T13:24:02Z    │
├─────────────────────────────────────────────┼──────────┼──────────┼─────────────────────────┤
│ redis-84d7c989c9-5j4tq                      │ redis    │ Running  │ 2018-10-09T13:24:06Z    │
├─────────────────────────────────────────────┼──────────┼──────────┼─────────────────────────┤
│ vue-storefront-848799bd5d-zvcd4             │ front    │ Running  │ 2018-10-12T11:46:09Z    │
├─────────────────────────────────────────────┼──────────┼──────────┼─────────────────────────┤
│ vue-storefront-api-5c5dbc57fd-l9fhr         │ api      │ Running  │ 2018-10-12T14:14:37Z    │
└─────────────────────────────────────────────┴──────────┴──────────┴─────────────────────────┘
```

Find Nginx pod, in the example above it is pod `nginx-6d68c9557-l67l2` and remove it by command:

```
node scripts/cli.js deploy
```