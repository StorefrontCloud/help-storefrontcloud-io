# Architecture

Typically, you get access to two Kubernetes **Namespaces** (two instances) from the Storefront Cloud team. For instance, let's take a look at the deployment of our <a href="https://demo.storefrontcloud.io">demo.storefrontcloud.io</a>. 

 There are **two namespaces**:

 - **demo-storefrontcloud-io** - which is the instance where the **prod** version of your Vue Storefront app is deployed,
 - **demo-test-storefrontcloud-io** - which is the instance where the **test** version of your Vue Storefront app is deployed.

<img src="/doc/architecture-diagram.png" />

 Each namespace includes **PODs** (POD is kind of Kubernetes app container):

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

Along with the Kubernetes namespaces, the Vue Storefront team provides you with **git** access via the <a href="https://code.vuestorefront.io">Storefront Cloud Code Access</a> site. You may find two repositories in there:

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> - where the **master** branch is used to deploy the production frontend and the **develop** branch is used to deploy the test frontend,
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> - where the **master** branch is used to deploy the production API and the **develop** branch is used to deploy the test API.

The namespaces are bound to the public URL addresses:

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> is deployed under <a href="https://demo.storefrontcloud.io">demo.storefrontcloud.io</a>
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> is deployed under <a href="https://demo.storefrontcloud.io/api">demo.storefrontcloud.io/api</a>


<img src="/doc/user-flow-diagram.png" />
