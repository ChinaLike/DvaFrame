import Colors from '../res/colors'

import Home from '../containers/Home'
import Account from '../containers/Account'

/**
 * 主页底部配置栏
 * bottomTabNavigatorConfig  底部选项卡配置
 *   initialRouteName -第一次加载时初始选项卡路由的 routeName。
 *   order -定义选项卡顺序的 routeNames 数组。
 *   paths - 提供 routeName 到 path 配置的映射, 它重写 routeConfigs 中设置的路径。
 *   backBehavior - 控制 "返回" 按钮是否会导致 Tab 页切换到初始 Tab 页? 如果是, 设置为 initialRoute, 否则 none。 默认为 initialRoute的行为。
 *   tabBarComponent -可选，覆盖用作标签栏的组件.
 *   tabBarOptions - 具有以下属性的对象:
 *       activeTintColor -活动选项卡的标签和图标颜色。
 *       activeBackgroundColor -活动选项卡的背景色。
 *       inactiveTintColor -"非活动" 选项卡的标签和图标颜色。
 *       inactiveBackgroundColor -非活动选项卡的背景色。
 *       showLabel -是否显示选项卡的标签, 默认值为 true。
 *       showIcon - 是否显示 Tab 的图标，默认为false。
 *       style -选项卡栏的样式对象。
 *       labelStyle -选项卡标签的样式对象。
 *       tabStyle -选项卡的样式对象。
 *       allowFontScaling -无论标签字体是否应缩放以尊重文字大小可访问性设置，默认值都是 true。
 *       adaptive - Should the tab icons and labels alignment change based on screen size? Defaults to true for iOS 11. If false, tab icons and labels align vertically all the time. When true, tab icons and labels align horizontally on tablet.
 *       safeAreaInset - 为 <SafeAreaView> 组件重写 forceInset prop， 默认值：{ bottom: 'always', top: 'never' }； top | bottom | left | right 的可选值有： 'always' | 'never'。
 * tab  底部按钮配置
 *   screen：界面
 *   title：标题
 *   navigationOptions
 *     tabBarLabel：tab文字
 *     tabBarSelectIcon：tab被选中的图片
 *     tabBarUnSelectIcon：tab未被选中的图片
 *     hideHeader：隐藏头部,不写表示显示头部
 *     navigatorBackground：导航栏背景（或颜色）, 如果未设置则使用全局的navigatorBackground
 */
const routeConfig = {
  bottomTabNavigatorConfig: {
    tabBarOptions: {
      activeTintColor: Colors.THEME.MAIN
    }
  },
  tab: [
    {
      routeName: 'Home',
      screen: Home,
      navigationOptions: {
        title: '主页',
        tabBarLabel: '主页',
        tabBarSelectIcon: require('../res/images/house.png'),
        tabBarUnSelectIcon: require('../res/images/house.png')
      }
    },
    {
      routeName: 'Account',
      screen: Account,
      navigationOptions: {
        title: '我的',
        tabBarLabel: '我的',
        tabBarSelectIcon: require('../res/images/person.png'),
        tabBarUnSelectIcon: require('../res/images/person.png'),
        hideHeader: true
      }
    }
  ]
}

module.exports = {
  routeConfig
}
