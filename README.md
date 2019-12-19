# 目录说明

```
project
│
│   README.md   说明文件
│
└───android     Android原生目录包
│
└───app     React-Native开发目录
│   │
│   │   index.js
│   │
│   │   router.js
│   │
│   └───components      自定义组件
│   │
│   └───config      配置文件
│   │
│   └───containers      界面
│   │
│   └───models      网络数据处理
│   │
│   └───navigator      导航栏数据及导航栏样式配置
│   │
│   └───res     资源文件
│   │
│   │   colors      颜色资源
│   │
│   │   images      图片资源
│   │
│   │   styles      样式资源
│   │
│   └───services        网络请求
│   │
│   └───utils       工具类集合
│
└───ios     iOS原生目录包
|
|
```

# 异常收集

Appcenter 带有 Crash 日志整理，不过需要安装对应 SDK,安装命令`npm install appcenter appcenter-analytics appcenter-crashes --save-exact`，本项目已经安装，故只需要修改对应的 app_secret 即可。

### Android 修改方法

- 打开 Android 工程，打开项目目录
- 进入 app 目录，依次打开 src→main→assets，找到 appcenter-config.json 文件并打开
- 修改对应字段 app_secret 的值为该项目在 appcenter 上创建时的密钥  
  ![Crash密钥修改Android示例](https://github.com/ChinaLike/Picture/blob/master/DvaFrame/android_Crash.png)

### iOS 修改方法

- 打开 iOS 工程，打开项目目录
- 找到项目目录下的 AppCenter-Config.plist 文件，并打开
- 修改对应字段 AppSecret 的值为该项目在 appcenter 上创建时的密钥  
  ![Crash密钥修改iOS示例](https://github.com/ChinaLike/Picture/blob/master/DvaFrame/ios_Crash.png)

# 版本推送

- 项目采用 CodePush 进行热更新，故不了解 CodePush 热更新可在 Appcenter 官网进行了解[CodePush](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/)
- 推送命令：`appcenter codepush release-react -a 账号/名称 -d 环境`  
  账号：对应 Appcenter 注册时或具有开发者权限的账号；  
  名称：Appcenter 创建时的名称；  
  环境：创建 CodePush 是的环境，默认有 Production 和 Staging，也可自定义环境，需要在 Appcenter 后台创建，或命令创建；  
  是否强制推送：如果需要强制推送，在推送命令最后添加`-m`
- Appcenter 命令安装及推送完整示例可参考[React Native 热更新](https://www.jianshu.com/p/a09005ddf509)
- 推送注意：推送只能更新 Js 代码，如果底包有更新需要重新更新底包

### Android 密钥修改

- 打开 Android 工程，打开项目目录
- 进入 app 目录，依次打开 src→main→values，找到 string.xml 文件并打开
- 修改 name 为 CodePushDeploymentKey 对应字段值为该项目在 appcenter 上创建 CodePush 时的密钥
- 每次更新底包时应根据需求更改密钥，如果是正式版则需要修改为正式版密钥，测试版则需要修改为测试版密钥  
  ![CodePush密钥修改Android示例](https://github.com/ChinaLike/Picture/blob/master/DvaFrame/android_CodePush.png)

### iOS 密钥修改

- 打开 iOS 工程，打开项目目录
- 找到项目目录下的 Info.plist 文件，并打开
- 修改对应字段 CodePushDeploymentKey 的值为该项目在 appcenter 上创建 CodePush 时的密钥
- 每次更新底包时应根据需求更改密钥，如果是正式版则需要修改为正式版密钥，测试版则需要修改为测试版密钥  
  ![CodePush密钥修改iOS示例](https://github.com/ChinaLike/Picture/blob/master/DvaFrame/ios_CodePush.png)

# 使用说明

### 导航栏

- 导航栏支持纯色和背景图片（可设计为渐变色）
- Tab 界面可修改 app→navigator 下的 TabNavigator.js 文件的 TabNavigator.navigationOptions 下的参数即可，根据项目需要，增加对应 index 多少，并设置 showHeader 参数和 header 参数；tabNavigationConfig 的第三个参数支持图片引用和颜色引用
- 其他页面可根据需要修改 MainNavigator.js 和 StackNavigator.js 文件中的 mainNavigatorConfig 参数即可，同样支持图片和颜色值

### Tab 栏

- 修改 app→navigator 下的 TabNavigator.js 文件的 TabNavigator 参数，根据业务需要增加对应的界面，可仿照已经写好的两个界面定义进行修改

# 引用依赖

- [antd-mobile-rn](https://rn.mobile.ant.design/docs/react/introduce-cn) UI 控件
- [appcenter appcenter-analytics appcenter-crashes](https://appcenter.ms) 项目管理及 Crash 收集
- [lodash](https://www.lodashjs.com/docs/latest) 字符串、数组处理组件
- [moment](http://momentjs.cn/docs/) 时间处理组件
- [query-string](http://nodejs.cn/api/querystring.html) 字符串处理组件
- [react-native-code-push](https://appcenter.ms) 热更新组件
- [react-native-root-toast](https://github.com/magicismight/react-native-root-toast) 轻提示组件
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) 引导页组件
- [react-navigation](https://reactnavigation.org/zh-Hans/) 导航组件
