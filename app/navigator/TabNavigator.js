import React from 'react'
import { StyleSheet, Image, Platform } from 'react-native'

import { createBottomTabNavigator } from 'react-navigation'

import Home from '../containers/Home'
import Account from '../containers/Account'

/**
 * 只放置底部Tab界面
 */
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '主页',
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
})

TabNavigator.navigationOptions = { header: null }

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25
  }
})

export default TabNavigator
