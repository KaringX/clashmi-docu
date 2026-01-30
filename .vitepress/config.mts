import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clash Mi Project",
  description: "Clash Mihomo for iOS",
  cleanUrls: true, //url删除 .html
  rewrites: {
    'page/newuser.md': 'newuser.md', //新人礼
  },

  head: [
    [
      'script',
      {
        async: '',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6660718818470329',
        crossorigin: 'anonymous'
      }
    ]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/app_icon_64.png",
    nav: [
      { text: '用户手册', link: '/guide/' },
      { text: '在线工具', link: 'https://tools.karing.app/' },
      { text: 'Download', link: '/download' }
    ],

    sidebar: [
      {
        text: '用户手册',
        items: [
          { text: '快速开始', link: '/guide/#price' },
          { text: '名词解释', link: '/guide/glossary' },
          { text: '在线面板', link: '/guide/online-panel' },
          { text: 'macOS', link: '/guide/macos' },
          { text: 'Linux', link: '/guide/linux' },
          { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: 'Clash 知识库',
        items: [
          { text: 'Clash 工作原理', link: '/wiki/introduction' },
          { text: '快速入手', link: '/wiki/getting-started' },
          { text: 'Inbound 入站', link: '/wiki/inbound' },
          { text: 'Outbound 出站', link: '/wiki/outbound' },
          { text: 'Rules 规则', link: '/wiki/rules' },
          { text: 'Clash DNS', link: '/wiki/dns' },
          { text: '参考配置', link: '/wiki/configuration-reference' },
          { text: '外部控制设置', link: '/wiki/external-controller' },
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
    ],


    footer: {
      message: 'Released under the GPL-3.0 license.',
      copyright: 'Copyright © 2025-present <a href="https://github.com/KaringX/clashmi">KaringX/clashmi</a>'
    },

    search: {
      provider: 'local' // minisearch
    },
    outlineTitle: "本页目录",
    outline: [2, 3],
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => /^google-|^countdown-/.test(tag), // ✅ 告诉 Vue 忽略 <google-ad-12> 等标签
      },
    },
  },

  lastUpdated: true,
  sitemap: {
    hostname: 'https://clashmi.app'
  }
})
