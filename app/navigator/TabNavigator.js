import { createBottomTabNavigator } from 'react-navigation'

import Home from '../containers/Home'

import Account from '../containers/Account'

/**
 * 创建底部Tab
 */
const TabNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  Account: { screen: Account }
})

export default TabNavigator
