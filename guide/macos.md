
# Using the Latest Version of Clash Mi on macOS

## 在macOS上使用最新版Clash Mi
- 目前**clashmi**采用 **dmg** 文件安装和更新应用
- Currently, **clashmi** uses **dmg** files to install and update the application.
- 系统要求 / System Requirements
  - macOS version: 12.0 (Monterey) or higher

## 安装步骤 / Installation Steps

- Download the DMG file, the file name is `clashmi_[version]_macos_universal.dmg`
  - 下载DMG文件，文件名为 `clashmi_[version]_macos_universal.dmg`
  - [稳定版本 / Stable version](https://dot.clashmi.app/client.html?tag=macos-stable)
  - 或 OR [GitHub Release Page](https://github.com/karingX/clashmi/releases/latest)

- 安装步骤
  1. 在Finder中找到下载的.dmg文件，双击打开DMG文件
  2. 将应用拖拽到"应用程序"文件夹
  3. 首次打开时，需要在"系统偏好设置 > 安全性与隐私"中允许运行

- Installation Steps
  1. Locate the downloaded .dmg file in Finder, and double-click to open the DMG file
  2. Drag the application to the "Applications" folder
  3. When opening for the first time, you need to allow it to run in "System Preferences > Security & Privacy"


## 问题列表 / Troubleshooting

#### 应用无法访问文件或网络
- 前往"系统偏好设置" > "安全性与隐私" > "隐私"
- 检查"文件与文件夹"、"网络"等权限
- 确保应用已被授予必要权限

#### Application cannot access files or the network
- Go to "System Preferences" > "Security & Privacy" > "Privacy"
- Check the permissions for "Files and Folders", "Network", etc.
- Make sure the application has been granted the necessary permissions

#### 权限错误 / Permission errors
- 重置应用权限 / Reset application permissions
```bash
sudo chmod -R 755 /Applications/clashmi.app
sudo chown -R $(whoami):staff /Applications/clashmi.app
```

