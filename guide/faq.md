---
outline: deep
---

# FAQ

## 全局模式无法连接 {#gloabl-link}
::: tip
- 表现: 开启“全局”模式, 但无法科学上网
  - 全局模式下默认的是直连, 可在面板中确认配置.
- 解决方案:
  - 手动到 代理 -> GLOBAL 设置为`节点选择` 或 `自动选择`
  - 或者在yaml的 proxy-groups 加上 GLOBAL 并设置为`节点选择`就可以
:::



