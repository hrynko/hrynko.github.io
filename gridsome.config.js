module.exports = {
  siteName: 'Aliaksei Hrynko',
  siteDescription: "Aliaksei Hrynko's personal website and blog.",
  siteUrl: 'https://hrynko.github.io',
  templates: {
    Post: '/blog/:title',
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
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    },
  },
}
