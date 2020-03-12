module.exports = {
    base: '/',
    head: [
      ['link', { rel: "icon", type: "image/x-icon", href: "https://divante.co/open-graph/favicons/SC_favicon.png"}]
     ],
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
              'getting-started/debugging-build',
              'getting-started/static-content-cache'
            ],
          },
          {
            title: 'CI/CD',
            collapsable: false,
            children: [
              'ci/general-information',
              'ci/stages',
              'ci/build-docker-image',
              'ci/deployment',
              'ci/docker-registry',
              'ci/customize-docker-image',
              'ci/external-ci-tools'
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
          }
        ],
      },
    },
    title: 'Storefront Cloud',
    description: 'Knowledge Base for Storefront Cloud service',
  };