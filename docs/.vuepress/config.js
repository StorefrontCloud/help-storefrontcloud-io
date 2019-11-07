module.exports = {
    base: '/',
    port: '8081',
    head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
      repo: 'StorefrontCloud/help-storefrontcloud-io',
      docsDir: 'docs',
      editLinks: true,
      nav: [
        {
          text: 'YouTube',
          link: 'https://www.youtube.com/channel/UCkm1F3Cglty3CE1QwKQUhhg',
        },
        {
          text: 'Medium',
          link: 'https://medium.com/the-vue-storefront-journal',
        },
      ],
      sidebar: {
        '/guide/': [
          '',
          {
            title: 'Getting started',
            collapsable: false,
            children: [
              'getting-started/architecture',
              'getting-started/cli-tool',
              'getting-started/code-access',
              'getting-started/magento-integration',
              'getting-started/first-deployment',
              'getting-started/debugging-build'
            ],
          },
          {
            title: 'CLI tool',
            collapsable: false,
            children: [
              'cli-tool/command-switch',
              'cli-tool/command-pods',
              'cli-tool/command-pod',
              'cli-tool/command-deploy',
              'cli-tool/command-exec',
              'cli-tool/command-shell',
              'cli-tool/command-cp',
              'cli-tool/command-dump',
              'cli-tool/command-restore',
              'cli-tool/command-import',
              'cli-tool/command-pm2',
              'cli-tool/command-reload',
              'cli-tool/command-monitor'
            ],
          },
          {
            title: 'CI/CD',
            collapsable: false,
            children: [
              'ci/general-information',
              'ci/build-docker-image',
              'ci/deployment'
            ],
          },
          // {
          //   title: 'Vue Storefront core and themes',
          //   collapsable: false,
          //   children: [
          //     'core-themes/themes',
          //     'core-themes/webpack',
          //     'core-themes/core-components',
          //     'core-themes/plugins',
          //     'core-themes/vuex',
          //     'core-themes/data',
          //     'core-themes/extensions',
          //   ],
          // },
          // {
          //   title: 'Data in Vue Storefront',
          //   collapsable: false,
          //   children: ['data/data'],
          // },
          // {
          //   title: 'Working with extensions',
          //   collapsable: false,
          //   children: ['extensions/'],
          // },
          // {
          //   title: 'Integrations',
          //   collapsable: false,
          //   children: ['integrations/magento', 'integrations/multistore'],
          // },
          // {
          //   title: 'Core API Modules docs',
          //   collapsable: false,
          //   children: ['api-modules/cart-module'],
          // },
        ],
      },
    },
    title: 'Storefront Cloud',
    description: 'Knowledge Base for Storefront Cloud service',
  };