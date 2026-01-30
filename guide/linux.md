# 在linux上使用最新版Clash Mi

## Using the Latest Version of Clash Mi on Linux

- 目前**Clash Mi** 提供三种格式的安装包: deb、rpm、AppImage
  - 格式均为 `clashmi_[version]_linux_amd64.deb`
  - 暂不支持ARM架构的设备


## Installation Steps / 安装步骤 {#install}


### Debian / Ubuntu {#debian}
- 下载安装包 / download deb file
  - [稳定版-点击下载 Stable-deb-Download](https://dot.clashmi.app/client.html?tag=linux-deb-stable)
  - [测试版-点击下载 Beta-deb-Download](https://dot.clashmi.app/client.html?tag=linux-deb-beta)
  - OR [GitHub Release Page](https://github.com/KaringX/clashmi/releases/latest)

- 安装 / install
  - `sudo apt install ./clashmi_[version]_linux_amd64.deb`


### Fedora / Redhat {#redhat}
- 下载安装包 / download rpm file
  - [稳定版-点击下载 Stable-rpm-Download](https://dot.clashmi.app/client.html?tag=linux-rpm-stable)
  - [测试版-点击下载 Beta-rpm-Download](https://dot.clashmi.app/client.html?tag=linux-rpm-beta)
  - OR [GitHub Release Page](https://github.com/KaringX/clashmi/releases/latest)
- 安装 / install
  - `sudo dnf install ./clashmi_[version]_linux_amd64.rpm`

### Archlinux / Manjaro {#archlinux}
- 感谢 @czyt 童鞋维护[AUR clashmi-bin](https://aur.archlinux.org/packages/clashmi-bin)
  ``` bash
  # 使用 yay
  yay -S clashmi-bin

  # 或使用 paru
  paru -S clashmi-bin
  ```


### AppImage
- 下载安装包 / download AppImage file
  - [GitHub Release Page](https://github.com/KaringX/clashmi/releases/latest)
- 安装 / install

  ```bash
  # 下载后，添加执行权限
  chmod +x clashmi_[version]_linux_amd64.AppImage

  # 运行
  sudo ./clashmi_[version]_linux_amd64.AppImage

  ```


## Issues / 问题列表 {#issues}

