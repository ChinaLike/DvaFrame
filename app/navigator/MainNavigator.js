import { createStackNavigator } from 'react-navigation'

import TabNavigator from './TabNavigator'

/**
 * 创建与主Tab平级界面，包含导航栏
 */
const MainNavigator = createStackNavigator({
  TabNavigator: { screen: TabNavigator }
})

export default MainNavigator
