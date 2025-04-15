import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clash Mi Project",
  description: "Clash Mihomo for iOS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '用户手册', link: '/guide/' },
      { text: 'Download', link: '/download' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: '下载', link: '/download' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KaringX/clashmi' }
    ]
  },
  lastUpdated: true,
  sitemap: {
    hostname: 'https://clashmi.app'
  }
})
