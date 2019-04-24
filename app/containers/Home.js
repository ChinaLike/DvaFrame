import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Button } from 'antd-mobile-rn'
import { connect } from 'react-redux'

// import { Button } from '../components'

import { NavigationActions } from '../utils'

@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../res/images/house.png')}
      />
    )
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          loading
          onPress={() => {
            this.gotoDetail()
          }}
        >
          跳转
        </Button>
        <Text>33</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 32,
    height: 32
  }
})

export default Home
