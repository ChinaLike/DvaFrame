import React, { PureComponent } from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'

import CodePush from './utils/CodePush'

import Loading from './containers/Loading'

import { NavigationActions, getActiveRouteName, app } from './navigator'

const App = app()

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
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
    if (app.loading) return <Loading />

    return <App dispatch={dispatch} state={router} />
  }
}

Router = CodePush.codePushInit()(Router)

export default Router
