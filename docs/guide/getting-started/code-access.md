# Code Acccess

Storefront Cloud service is accessible via two separate channels:

 - [CLI Tool](https://code.storefrontcloud.io/StorefrontCloud/storefrontcloud-cli) for the infrastructure management,
 - [Storefront Cloud Code Access](https://code.storefrontcloud.io) portal for source code management.

 Storefront Cloud is run by the [Vue Storefront](http://github.com/DivanteLtd/vue-storefront) technology. You may want to customize or modify the behavior of Frontend or/and the API layers.

 You may find more developer's documentation on both apps on our Github:
 - [Vue Storefront Github](http://github.com/DivanteLtd/vue-storefront),
 - [Vue Storefront API Github](https://github.com/DivanteLtd/vue-storefront-api)

 ## Repository layout

 Once Your instance is created You should receive the **login and password** credentials to [Storefront Cloud Code Access portal](https://code.storefrontcloud.io). 

 The website is powered by the latest [Gitlab](http://gitlab.org) and pre-configured with two repositories:

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> - which **master** branch is used to deploy the production frontend and **develop** branch is used to deploy the test frontend,
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> - which **master** branch is used to deploy the production API and **develop** branch is used to deploy the test API.

<img src="/doc/code-access.png" alt="Code access portal" />

The namespaces are bound to the public URL addresses:

- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> **master branch** is deployed under <a href="https://demo.storefrontcloud.io">demo.storefrontcloud.io</a>
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> **master branch** is deployed under <a href="https://demo.storefrontcloud.io/api">demo.storefrontcloud.io/api</a>
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io">**demo-storefrontcloud-io**</a> **develop branch** is deployed under <a href="https://demo-test.storefrontcloud.io">demo-test.storefrontcloud.io</a>
- <a href="https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api">**demo-storefrontcloud-io-api**</a> **develop branch** is deployed under <a href="https://demo-test.storefrontcloud.io/api">demo-test.storefrontcloud.io/api</a>

<img src="/doc/architecture-diagram.png" alt="The Architecture diagram for Storefront Cloud" />

## Cloning the code

If You already had some experience with Gitlab or not - You may've seen it offers very similar functionality to Github.com.
One of the first things You may want to do is to clone the repository to Your `localhost` to use **Visual Studio Code** or other editor of choice to customize the Storefront.

To do so please execute command similar to:

```
git clone https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io.git
```

For the API application:
```
git clone https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api.git
```
<img src="/doc/code-access-2.png" alt="The interface and features are very similar to Github" />


## Syncing up with Vue Storefront

Your repository is always **initialized** with the latest stable version of Vue Storefront. As it can be heavily modified for Your needs, we can not make the obligatory decision to update Your repository with each new relase of Vue Storefront.

To update the repository to the latest release please do pull the changes from the [Official Vue Storefront repository](http://github.com/DivanteLtd/vue-storefront).

**Note:** Cloud Team is strongly recommending You to upgrade Yoru **develop** branch first - and test the changes on the **test.storefrontcloud.io** domain before applying the changes to the **master**.

For the frontend app:
```
cd demo-storefrontcloud-io
git remote add upstream https://github.com/DivanteLtd/vue-storefront.git
git fetch upstream
git checkout master
```

For the API app:
```
cd demo-storefrontcloud-io-api
git remote add upstream https://github.com/DivanteLtd/vue-storefront-api.git
git fetch upstream
git checkout master
```

At this point You'll probably need to fix some conflicts (and commit changes to the repository). We do recommend using the GUI based tools like:
- [Github Desktop](https://desktop.github.com/),
- [SourceTree](https://www.sourcetreeapp.com/).

