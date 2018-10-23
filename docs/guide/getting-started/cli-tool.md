# Command Line Access

[**Storefront Cloud CLI**](https://github.com/StorefrontCloud/storefrontcloud-cli) tool is designed to let You manage Your Storefront Cloud namespaces. Most of the operations are available for the user as a self service. In cases of any problems or custom needs <a href="mailto:support@storefrontcloud.io">please do contact the Helpdesk</a>

Shortly after You register Your account on the <a href="https://storefrontcloud.io">storefrontcloud.io</a> You should receive a contact request from the Cloud Team. Then after agreeing on the service terms and conditions Cloud Team will provide You with:

- **kube.config** file that You can paste or import to this tool for getting access to Your Kubernetes cluster,
- **login and password** to the <a href="https://code.storefrontcloud.io">Storefront Cloud Code Access</a> portal.

The setup steps, getting access to Your cloud:

#### Install storefrontcloud-cli
First, install `storefrontcloud-cli` (requirements: `node 8.x+, yarn`):

```bash
git clone https://github.com/StorefrontCloud/storefrontcloud-cli.git`
cd storefrontcloud-cli
yarn install
```

#### Setup Your account:

Please do run:
`node scripts/cli.js setup`

1. The setup wizard will ask You first about the **kube.config** file. You can save the file received from the Cloud Team to Your local file system (for example: **~/.kube/config** which is the default path) OR You can use Your default system editor to paste the config content directly during the setup.

2. Then You have an option to use Your existing <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/">kubectl</a> tool. If You haven't used it before the setup will download and install the tool to the current working directory.

3. The last question is about the default namespace. Please check the architecture diagram above. In our case we're providing the **demo-storefrontcloud-io** default namespace. That means that all subsequent calls will be made to the public instance of **demo.storefrontcloud.io** PODs. You can switch the default namespace by using `node scripts/cli.js namespace` command OR using the `--ns command` which is supported by all cli commands.

<img src="/doc/setup.jpg" />


