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

## 路由配置

    可参考[react-navigation](https://reactnavigation.org/zh-Hans/)的属性进行配置

### 全局属性配置（`navigator/Config.js`）

#### baseConfig 属性

- navigatorBackground 导航栏背景颜色或图片（图片可自由设计，渐变图片），颜色支持十六进制或 rgb 格式，图片支持本地，如果想使用在线图片，可自行修改。
- titleFontSize 标题大小
- headerTintColor 页眉颜色，即导航栏整体文字颜色

### 选项卡配置（`navigator/TabRoute.js`）

#### routeConfig 属性

- bottomTabNavigatorConfig 选项卡基本配置
  - initialRouteName -第一次加载时初始选项卡路由的 routeName。
  - order -定义选项卡顺序的 routeNames 数组。
  - paths - 提供 routeName 到 path 配置的映射, 它重写 routeConfigs 中设置的路径。
  - backBehavior - 控制 "返回" 按钮是否会导致 Tab 页切换到初始 Tab 页? 如果是, 设置为 initialRoute, 否则 none。 默认为 initialRoute 的行为。
  - tabBarComponent -可选，覆盖用作标签栏的组件.
  - tabBarOptions - 具有以下属性的对象:
    - activeTintColor -活动选项卡的标签和图标颜色。
    - activeBackgroundColor -活动选项卡的背景色。
    - inactiveTintColor -"非活动" 选项卡的标签和图标颜色。
    - inactiveBackgroundColor -非活动选项卡的背景色。
    - showLabel -是否显示选项卡的标签, 默认值为 true。
    - showIcon - 是否显示 Tab 的图标，默认为 false。
    - style -选项卡栏的样式对象。
    - labelStyle -选项卡标签的样式对象。
    - tabStyle -选项卡的样式对象。
    - allowFontScaling -无论标签字体是否应缩放以尊重文字大小可访问性设置，默认值都是 true。
    - adaptive - Should the tab icons and labels alignment change based on screen size? Defaults to true for iOS 11. If false, tab icons and labels align vertically all the time. When true, tab icons and labels align horizontally on tablet.
    - safeAreaInset - 为 <SafeAreaView> 组件重写 forceInset prop， 默认值：{ bottom: 'always', top: 'never' }； top | bottom | left | right 的可选值有： 'always' | 'never'。
- tab 选项卡路由配置

  - routeName 路由名称
  - screen 界面引用
  - navigationOptions Item 选项卡配置
    - title 标题，可用作 headerTitle 和 tabBarLabel 的后备的通用标题
    - tabBarVisible true 或 false 用于显示或隐藏标签栏，如果未设置，则默认为 true。
    - tabBarSelectIcon 选项卡被选中后的图片样式
    - tabBarUnSelectIcon 选项卡未被选中的图片样式
    - hideHeader 隐藏头部，默认 false
    - navigatorBackground 导航栏背景（或颜色）, 如果未设置则使用全局的 navigatorBackground
    - tabBarLabel 标签栏或 React 元素中显示的选项卡的标题字符串或给定{ focused: boolean, tintColor: string }的函数返回 React.Node，用于显示在标签栏中。 未定义时，使用场景 title。
    - tabBarButtonComponent React 组件，它包装图标和标签并实现 onPress。 默认情况下是 TouchableWithoutFeedback 的一个封装，使其其表现与其它可点击组件相同。 tabBarButtonComponent: TouchableOpacity 将使用 TouchableOpacity 来替代.
    - tabBarAccessibilityLabel 选项卡按钮的辅助功能标签。 当用户点击标签时，屏幕阅读器会读取这些信息。 如果您没有选项卡的标签，建议设置此项。
    - tabBarTestID 用于在测试中找到该选项卡按钮的 ID。
    - tabBarOnPress 处理点击事件的回调; 该参数是一个对象，其中包含：navigation：页面的 navigation props；defaultHandler: tab press 的默认 handler

### 栈顶路由配置（`navigator/MainRoute.js`）

#### routeConfig 属性

- 路由配置对象是从路由名称到路由配置的映射，它告诉导航器该路由呈现的内容。比如 登录界面、手势密码界面等等。
- 如果需要自定义配置，可在相应的组件中配置以下方法，具体属性可参考[react-navigation](https://reactnavigation.org/docs/zh-Hans/2.x/stack-navigator.html)的 createStackNavigator 的 navigationOptions 配置属性：

```
  static navigationOptions = {
    title: 'Login',//标题
    header: null//是否显示导航栏，默认显示
  }
```

- 格式：

```
{
  // For each screen that you can navigate to, create a new entry like this:
  Profile: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: ProfileScreen,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: 'people/:name',
    // The action and route params are extracted from the path.
    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),
  },

  ...MyOtherRoutes,
}
```

### 普通路由配置（`navigator/StackRoute.js`）

- 路由配置对象是从路由名称到路由配置的映射，它告诉导航器该路由呈现的内容。比如 详情界面、内容界面界面等等。
- 如果需要自定义配置，可在相应的组件中配置以下方法，具体属性可参考[react-navigation](https://reactnavigation.org/docs/zh-Hans/2.x/stack-navigator.html)的 createStackNavigator 的 navigationOptions 配置属性：

```
  static navigationOptions = {
    title: 'Login',//标题
    header: null//是否显示导航栏，默认显示
  }
```

- 格式：

```
{
  // For each screen that you can navigate to, create a new entry like this:
  Profile: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: ProfileScreen,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: 'people/:name',
    // The action and route params are extracted from the path.
    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),
  },

  ...MyOtherRoutes,
}
```

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
