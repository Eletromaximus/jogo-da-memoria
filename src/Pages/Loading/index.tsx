// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'

import { StyleSheet, View, Button } from 'react-native'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

const Loading: React.FC = () => {
  const { navigate } = useNavigation()
  //const titlePosition = useSharedValue(30)
/*
  useEffect(() =>{
    return () => navigate('Game')
  }, [] )

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP
      )
    }
  })
  */

  return (
    <View style={styles.container}>
      <Animated.Text style={styles.title}>
        Bem Vindo!
        
      </Animated.Text>
      <Button title='Começar!' onPress={ () =>
          navigate('Game')
        }> Start </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313131',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24
  },
  botao: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: "center"
  }
})

export default Loading
