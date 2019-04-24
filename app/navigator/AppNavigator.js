import { createStackNavigator } from 'react-navigation'
import { Animated, Easing } from 'react-native'

import MainNavigator from './MainNavigator'
import Login from '../containers/Login'

/**
 * 界面配置文件
 */
const config = {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const { index } = scene

      const height = layout.initHeight
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0]
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
      })

      return { opacity, transform: [{ translateY }] }
    }
  })
}

const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login }
  },
  config
)

export default AppNavigator
