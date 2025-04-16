import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clash Mi Project",
  description: "Clash Mihomo for iOS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/app_icon_64.png",
    nav: [
      { text: '用户手册', link: '/guide/' },
      { text: 'Download', link: '/download' }
    ],

    sidebar: [
      {
        text: '用户手册',
        items: [
          { text: '快速开始', link: '/guide/' },
          { text: '在线面板', link: '/guide/online-panel' },
          { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: '常用链接',
        items: [
          { text: '下载APP', link: '/download' },
          { text: '联系我们', link: '/contacts' },
          { text: '赞助商', link: 'https://1.x31415926.top/?ref=clashmi' },
          { text: '捐赠', link: 'https://clashmi.app/donate' },
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
