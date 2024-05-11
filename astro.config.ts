import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import compress from '@playform/compress'
import rehypeExternalLinks from 'rehype-external-links'

export default defineConfig({
  site: 'https://hrynko.github.io',
  integrations: [mdx(), sitemap(), compress()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { rel: ['noopener', 'noreferrer'], target: '_blank' },
      ],
    ],
  },
})
