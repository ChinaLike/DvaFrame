import React from 'react'
import { StyleSheet, Image, Platform, StatusBar } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Config from './Config'
import Colors from '../res/colors'
import Home from '../containers/Home'
import Account from '../containers/Account'

/**
 * 只放置底部Tab界面
 */
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '主页',
        tabBarLabel: '主页',
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../res/images/house.png')
                : require('../res/images/house.png')
            }
          />
        )
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        title: '我的',
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../res/images/person.png')
                : require('../res/images/person.png')
            }
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.THEME.MAIN
    }
  }
)

TabNavigator.navigationOptions = ({ navigation }) => {
  let title = ''
  let showHeader = true
  const index = navigation.state.index
  if (index == 0) {
    title = '首页'
    showHeader = true
  } else if (index == 1) {
    title = '我的'
    showHeader = false
  }
  return Config.tabNavigationConfig(
    showHeader,
    title,
    require('../res/images/tab/navigation_bg.png')
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25
  }
})

export default TabNavigator
