import React, { PureComponent } from 'react'
import { StyleSheet, View, ActivityIndicator, BackHandler } from 'react-native'
import { connect } from 'react-redux'
import StatusBarUtil from './utils/StatusBarUtil'
import CodePush from './utils/CodePush'

import { NavigationActions, getActiveRouteName, app } from './navigator'

const App = app()

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    StatusBarUtil.setStatusBarColor('transparent')
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
    CodePush.codePushSync()
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    if (app.loading)
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )

    return <App dispatch={dispatch} state={router} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Router
