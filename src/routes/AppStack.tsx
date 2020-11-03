// eslint-disable-next-line no-use-before-define
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { Container } from './styles';
import Game from '../Pages/Game/index'
import Loading from '../Pages/Loading/index'

const { Navigator, Screen } = createStackNavigator()

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Loading" component={Loading} />
        <Screen name="Game" component={Game} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
