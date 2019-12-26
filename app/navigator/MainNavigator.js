import React from 'react'
import { StyleSheet, Image, Platform, StatusBar } from 'react-native'

import { createStackNavigator } from 'react-navigation'
import Config from './Config'
import TabNavigator from './TabNavigator'

import MainRoute from './MainRoute'
import ColorUtil from '../utils/ColorUtil'

stackNavigatorConfig = () => {
  const {
    navigatorBackground,
    titleFontSize,
    headerTintColor
  } = Config.baseConfig
  let headerBackground = null
  let backgroundColor = null

  if (ColorUtil.isColor(navigatorBackground)) {
    backgroundColor = navigatorBackground
  } else {
    headerBackground = (
      <Image source={navigatorBackground} style={{ flex: 1 }} />
    )
  }

  return {
    headerMode: 'screen',
    headerLayoutPreset: 'center',

    navigationOptions: {
      headerBackTitle: '返回',
      headerTintColor: headerTintColor || 'white',
      gesturesEnabled: true,
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
      headerPressColorAndroid: 'rgba(0,0,0,0.2)'
    }
  }
}

/**
 * 创建与主Tab平级界面，包含导航栏
 */
const MainNavigator = createStackNavigator(
  {
    TabNavigator: { screen: TabNavigator },
    ...MainRoute.routeConfig
  },
  this.stackNavigatorConfig()
)

export default MainNavigator
