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
          { text: '快速开始', link: '/guide/#price' },
          { text: '名词解释', link: '/guide/glossary' },
          { text: '在线面板', link: '/guide/online-panel' },
          { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: '常用链接',
        items: [
          { text: '下载APP', link: '/download' },
          { text: '联系我们', link: '/page/contact' },
          { text: '推荐机场', link: '/page/sponsor#list' },
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
