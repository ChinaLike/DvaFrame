import { Platform, StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import TabNavigator from './TabNavigator'
import Color from '../res/colors'
import Detail from '../containers/Detail'

const stackConfig = {
  headerMode: 'screen',
  headerLayoutPreset: 'center',
  navigationOptions: {
    headerTintColor: 'white',
    gesturesEnabled: true, //不允许滑动关闭界面
    headerTitleStyle: {
      fontSize: 18,
      flex: 1,
      textAlign: 'center'
    },
    headerStyle: {
      backgroundColor: Color.THEME,
      ...Platform.select({
        android: {
          paddingTop: StatusBar.currentHeight,
          height: 56 + StatusBar.currentHeight
        }
      })
    },
    headerPressColorAndroid: 'rgba(0,0,0,0.2)'
  }
}

/**
 * 创建与主Tab平级界面，包含导航栏
 */
const MainNavigator = createStackNavigator(
  {
    TabNavigator: { screen: TabNavigator },
    Detail: { screen: Detail }
  },
  stackConfig
)

export default MainNavigator
