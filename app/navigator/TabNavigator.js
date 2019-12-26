import React from 'react'
import { StyleSheet, Image, Platform, StatusBar } from 'react-native'
import _ from 'lodash'
import { createBottomTabNavigator } from 'react-navigation'

import Config from './Config'
import TabRoute from './TabRoute'
import ColorUtil from '../utils/ColorUtil'

/**
 * 路由配置对象是从路由名称到路由配置的映射，它告诉导航器该路由要呈现的内容
 */
routeConfigs = () => {
  const config = TabRoute.routeConfig
  let routeConfig = {}
  _.map(config.tab, (value, index) => {
    const {
      title,
      tabBarLabel,
      tabBarSelectIcon,
      tabBarUnSelectIcon
    } = value.navigationOptions
    routeConfig[`${value.routeName}`] = {
      screen: value.screen,
      navigationOptions: {
        title,
        tabBarLabel: tabBarLabel || title,
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            style={styles.icon}
            source={focused ? tabBarSelectIcon : tabBarUnSelectIcon}
          />
        )
      }
    }
  })
  return routeConfig
}

/**
 * 底部选项卡配置
 */
bottomTabNavigatorConfig = () => {
  const routeConfig = TabRoute.routeConfig
  if (routeConfig && routeConfig.bottomTabNavigatorConfig) {
    return routeConfig.bottomTabNavigatorConfig
  } else {
    return {}
  }
}

/**
 * 创建底部选项卡
 */
const TabNavigator = createBottomTabNavigator(
  this.routeConfigs(),
  this.bottomTabNavigatorConfig()
)

TabNavigator.navigationOptions = ({ navigation }) => {
  const { tab } = TabRoute.routeConfig
  const index = navigation.state.index
  const { navigationOptions } = tab[index]
  const { hideHeader, navigatorBackground } = navigationOptions
  if (hideHeader) {
    //隐藏头部
    return {
      header: null
    }
  } else {
    //显示头部
    const { titleFontSize, headerTintColor } = Config.baseConfig
    let tabHeaderNavigatorBackground =
      navigatorBackground || Config.baseConfig.navigatorBackground
    let headerBackground = null
    let backgroundColor = null
    if (ColorUtil.isColor(tabHeaderNavigatorBackground)) {
      backgroundColor = tabHeaderNavigatorBackground
    } else {
      headerBackground = (
        <Image source={tabHeaderNavigatorBackground} style={{ flex: 1 }} />
      )
    }
    return {
      headerTintColor: headerTintColor || 'white',
      gesturesEnabled: false,
      headerTitleStyle: {
        fontSize: titleFontSize || 18,
        flex: 1,
        textAlign: 'center'
      },
      headerTransparent: false,
      headerBackground: headerBackground,
      headerStyle: {
        backgroundColor: backgroundColor,
        ...Platform.select({
          android: {
            paddingTop: StatusBar.currentHeight,
            height: 50 + StatusBar.currentHeight
          }
        })
      },
      headerPressColorAndroid: 'rgba(0,0,0,0.2)',
      ...navigationOptions
    }
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25
  }
})

export default TabNavigator
