# 赞助商 机场列表

:::info 如何使用机场订阅链接？
- 注册进入机场后台, 找到 "订阅地址" 或 "clash订阅链接", 点击复制
- 回到APP-配置-添加配置链接
- 开启APP首页的连接按钮, 即可科学上网
:::

## 排名不分先后, 请自行试用. 如无法访问,请自架梯  {#list}

<countdown-redirect seconds="30" href="/newuser" title="新人礼 领取免费流量"></countdown-redirect>

<!-- 动态渲染部分 -->
<div v-for="item in shuffledFeaturedItems" :key="item.url" class="isp-item isp-featured">
  <h2>{{ item.name }}</h2>
  <div class="tip custom-block">
    <p class="custom-block-title">⚡👑{{ item.name }}</p>
    <p>
      <a :href="item.url" target="_blank" rel="noopener">
        点击前往👉<strong>【{{ item.name }}】</strong>
      </a>
    </p>
    <div v-html="md.render(item.desp)"></div>
  </div>
</div>

## AD
<google-ad-12></google-ad-12>

<div v-for="item in shuffledNormalItems" :key="item.url" class="isp-item isp-normal">
  <h2>{{ item.name }}</h2>
  <div v-html="md.render(item.desp)"></div>
  <p>
    <a :href="item.url" target="_blank" rel="noopener">
      点击前往👉<strong>【{{ item.name }}】</strong>
    </a>
  </p>
</div>

## 赞助clashmi | 投广告
- 机场合作通道 👉 https://karing.app/blog/isp/cooperation/
  - 成为karing、clashmi的推荐机场

<script setup>
import { onMounted, ref, computed } from 'vue'
import MarkdownIt from 'markdown-it'

// 加载外部脚本
onMounted(() => {
  const script1 = document.createElement('script')
  script1.src = '/js/component/CoutdownRedirect.js?v=250417'
  document.body.appendChild(script1)

  const script2 = document.createElement('script')
  script2.src = '/js/component/GoogleAd12.js?v=2505193'
  document.body.appendChild(script2)
})

// 原始数据（你提供的 items 数组）
const items = ref(<!--list-->)

// 初始化 markdown-it 实例
const md = new MarkdownIt()

// 筛选精品（pick === 100）与普通项
const featuredItems = computed(() => items.value.filter(item => item.pick === 100))
const normalItems = computed(() => items.value.filter(item => item.pick !== 100))

const shuffledFeaturedItems = computed(() => {
  const arr = [...featuredItems.value]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
})

// 随机打乱普通项
const shuffledNormalItems = computed(() => {
  const arr = [...normalItems.value]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
})
</script>

<style scoped>
/* 可选：微调间距，与 VitePress 主题协调 */
.isp-item {
  margin-bottom: 2rem;
}
.isp-featured .custom-block {
  margin-top: 0.5rem;
}
</style>
