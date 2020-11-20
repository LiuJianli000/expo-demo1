## 启动项目

#### 拉取项目

`git clone`

#### 安装依赖

`yarn` / `npm install`

#### 运行

`yarn start` / `npm start`

#### 调试

- 执行 `yarn start` 之前
- usb 数据线连接 手机 和电脑
- 手机打开开发者模式（`关于手机` --> `软件版本号` 连续点击），点击左上角 `back` 按钮找到 `开发者选项` --> 勾选 `USB 调试`
- 执行 `yarn start` 运行项目
- 第一种预览方式：usb。根据提示，下载 `Expo` 工具。打开 `RECENTLY IN DEVELOPMENT` 下的项目，就可以预览项目（貌似也需要同一网络下）
- （第二种预览方式：扫码。在软件中注册 expo 账号；终端执行 `expo login`，根据提示进行 expo 登录；同一局域网下，手机设备就可以进行扫 二维码进行预览项目了）
- （第三种调试方式：模拟器。同上进行 expo 账号注册，终端登录；电脑上下载模拟器，安装 expo apk同第一种预览方式操作）
- 调试 和 报错信息，`设备页面` / `http://localhost:19002` / `终端` 下查看


## 技术栈介绍

#### 版本

expo-cli：`3.28.4`

node： `12.16.3`

yarn：`1.22.4`

#### 导航配置（路由）

使用 [react-navigation 5.0](https://reactnavigation.org/docs/getting-started)

配置文件：`src/router.js`

#### 状态管理

`dva-core` + `react-redux`

配置文件： `src/index.js`

#### UI 框架

`@ant-design/react-native`