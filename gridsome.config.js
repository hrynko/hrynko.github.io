module.exports = {
  siteName: 'Aliaksei Hrynko',
  siteDescription: "Aliaksei Hrynko's personal website and blog.",
  siteUrl: 'https://hrynko.github.io',
  templates: {
    Post: '/blog/:fileInfo__name',
    Tag: '/blog/tag/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
      autolinkHeadings: false,
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    },
  },
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions.whitespace = 'condense'
        return options
      })
  },
}
