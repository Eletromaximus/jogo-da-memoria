// eslint-disable-next-line no-use-before-define
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export interface Props {
    cor: string,
    virado: boolean,
    id: number,
    key: number,
    onClick: () => void
  }

function Carta ({ cor, virado, onClick, id }: Props) {
  return (

    <RectButton
      onPress={() => onClick()}
      style={{
        padding: 1,
        margin: 1
      }
      }>
      <View
        style={virado ? {
          padding: 3,
          margin: 3,
          backgroundColor: cor,
          width: 110,
          height: 130
        } : style.verso}
      />

    </RectButton>

  )
}

const style = StyleSheet.create({
  verso: {
    padding: 3,
    margin: 3,
    backgroundColor: 'grey',
    width: 110,
    height: 130
  }
})

export default Carta
