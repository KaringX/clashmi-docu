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

## 连接后无流量
::: tip
- 表现: 流量及速度一直为0
- 解决方案:
  - `TUN`设置为`覆写`,并且`启用`,重新连接(windows下需要以管理员身份重新启动clashmi才能启用TUN)
  - 如果你完全使用的是机场订阅(clashmi里未开启覆写), 你需要找你的订阅提供商改进配置
:::

## 订阅添加失败
::: tip
- 注意:clashmi仅支持`clash`的订阅(扩展名为.yml或.yaml),不支持`sing-box/v2ray`等其他非`clash`的订阅
- 如果订阅来源与github,先到浏览器里验证订阅链接是否有效
- 如果订阅来自机场,你可能需要到 `应用设置`-`UserAgent` 设置适合该机场的 `UserAgent`,以便机场下发正确的clash订阅配置文件
- 某些订阅所用的域名可能被拦截,这种情况下,你需要先打开其他代理软件并连接,然后再到clashmi里添加订阅

:::

## 如何在添加订阅时关闭App的默认覆写
::: tip
- 订阅链接参数添加 `overwrite=false`

:::

## 点击连接报错
::: tip
- 请检查错误信息里是否是由于配置导致,如果是(比如包含 `yaml:line`), 请订正配置后(可能需要重新更新)后,重新连接

:::

## 华为鸿蒙系统,clashmi连接后无网络
::: tip
- 核心设置-TUN-开启'覆写', 开启'启用', 关闭'DNS劫持', 开启'附加HTTP代理到VPN'

:::

## Windows下点击连接报错 configure tun interface: Access is denied
::: tip
- 以管理员身份重新启动clashmi后,重新连接

:::

## Windows下如何开机启动并以TUN模式运行
::: tip
- 1. 以管理员身份启动clashmi
- 2. `核心设置`-`TUN`- `开启覆写` 并 `启用`(如果TUN的配置来源于订阅配置文件,这里需要将 `覆写` 禁用)
- 3. `应用设置`-`开机启动`(如果以前以非管理员身份设置过开机启动,需要以管理员身份重新设置一次)

:::

## ios下clashmi点击连接后,立即马上自动断开连接
::: tip
- 小知识:ios系统不同于其他系统,ios系统对vpn扩展有严格的内存使用上限限制(50M),一旦超出,系统会杀死vpn进程
- 解决方法:减少geosite/geoip/ip-asn等规则数量;改用mrs格式的规则集

:::

## ios下clashmi 内置zashboard面板无法正常使用
::: tip
- `zashboard`不兼容ios 16.4,具体可以到`zashboard` github[https://github.com/Zephyruso/zashboard]查看
- 解决方案: 替换成其他在线面板(仅支持`http`协议的在线面板)

:::

## ios/macos无法下载/更新 clashmi
::: tip
- 1. 使用可以下载clashmi的账号,比如美区账号(中国大陆地区的苹果账号无法下载更新clashmi)
- 2. 如果已经安装过testflight版本,卸载clashmi后,使用有效苹果账号重新下载安装clashmi

:::


### macos 为什么需要 '完全磁盘访问权限'
 - 此权限仅在某些设备上才需要开启(操作系统问题)
 - 这些设备上,不开启 '完全磁盘访问权限',clashmi的系统扩展组件无法访问clashmi的自己的配置文件,导致无法开启连接
 - 此权限仅用于读取clashmi自己的配置文件,不会用于其他用途

:::


## clashmi覆写是如何工作的
::: tip
- clashmi覆写分为3个部分
  - 1. 订阅配置
  - 2. 自定义覆写配置
  - 3. clashmi内的覆写设置[内置-覆写,内置-不覆写]
- 覆写逻辑
  - 1. 当前订阅设置有自定义覆写配置:`自定义覆写配置` 覆写 `订阅配置`, 生成 `配置1`, `clashmi内置覆写配置`  覆写 `配置1`
  - 2. 当前订阅设置没有自定义覆写配置:`clashmi内置覆写配置` 覆写 `订阅配置`

:::

## geo ruleset 如何更新
::: tip
- geo ruleset 不支持手动更新
- geo ruleset 支持自动更新, 参考: `核心设置`-`Geo Ruleset`-`更新时间间隔`

:::

## 面板里看到内存占用过高,比如几百M(仅针对PC端)
::: tip
- 首先到 `面板`-`连接` 里查看连接数, 如果连接数过高(比如超过1000),找到连接数过高对于的应用,杀死对应的进程/应用
- 如果连接数正常(比如小于100), `核心设置`-`Pprof Address`: 设置为 `127.0.0.1:4578`, 返回主屏重新连接,待下次复现问题的时候,打开控制台, 输入 `go tool pprof http://127.0.0.1:4578/debug/pprof/heap` 并回车, 继续在控制台输入 `web` 并回车, 将生成的 文件 发送给开发人员分析

:::

## 面板无法`更新面板`
::: tip
- 内置面板使用了内置的资源,无法更新,如果想使用最新的面板,请改用在线面板

:::


## 面板无法 `更新核心`/`重启核心`/`重载配置`/`更新GEO`
::: tip
- 由于平台或功能限制,上述功能已全部禁用

:::

## 面板其他问题
::: tip
- 面板为3方提供,如果有问题,请反馈给3方,或者设置成其他在线面板

:::

## clashmi 会导致数据泄露或者面板被其他人访问吗
::: tip
- 1. clashmi 本身不会收集任何信息
- 2. clashmi 强制开启面板`secret`(设备唯一),即使用户开启允许非本机用户访问面板服务,其他用户也必须提供有效的`secret`才能访问面板

:::


## 如何修改延迟检测URL
::: tip
- 应用设置 -> 延迟测试URL
- 可用的网址请参考: [url-test网址列表](https://karing.app/blog/case/url-test/#url-test%E7%BD%91%E5%9D%80%E5%88%97%E8%A1%A8)

:::

## 外部如何调用clashmi实现自动连接/断开连接
::: tip
- 连接: clash://connect?background=true
- 断开连接: clash://disconnect?background=true
- 重新连接: clash://reconnect?background=true

:::

## clashmi自带的mihomo核心与原版mihomo核心功能上有何区别
::: tip
- geosite/geoip:会被强制转换成对应的geo ruleset
- ips-asn:ios系统下不支持使用此数据库
- 核心更新:不支持从面板里更新内核(需要跟随App更新)
- 本地面板:不支持更新(需要跟随App更新)
- 内存占用统计:使用和sing-box核心同样的统计方式(较实际使用偏低)

:::

## 如果捐助clashmi
::: tip
- window/android 用户: `关于`- `捐助`
- ios/macos 用户: https://clashmi.app/donate

:::