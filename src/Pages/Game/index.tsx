// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Carta from '../../components/Carta'
import inicitalizarMonte from '../../utils/Monte'

export interface IMesa {
    cor: string,
    id: number,
    virado: boolean
}

function Mesa () {
  const [cartas, setCartas] = useState<Array<IMesa>>(inicitalizarMonte())
  const [segundo, setSegundo] = useState<number>(-1)
  const [primeiro, setPrimeiro] = useState<number>(-1)

  useEffect(() => {
    if (primeiro !== -1 && segundo !== -1) {
      comparando()
    }
  }, [segundo])

  // const memoria = useCallback(comparando, [primeiro, segundo])

  function desvirar (index: number) {
    const novoCartas = [...cartas]
    novoCartas[index].virado = !cartas[index].virado
    setCartas(cartas)
  }

  function comparando () {
    if (cartas[primeiro].id !== cartas[segundo].id) {
      desvirar(primeiro)
      setPrimeiro(-1)
      desvirar(segundo)
      setSegundo(-1)
    } else {
      setPrimeiro(-1)
      setSegundo(-1)
    }
  }

  function alteracao (item: IMesa, index: number) {
    if (item.virado === false) {
      if (primeiro === -1) {
        setPrimeiro(index)
        desvirar(index)
        return
      }

      if (segundo === -1) {
        setSegundo(index)
        desvirar(index)
      }
    }
  }

  return (
    <View style={style.container}>
      {
        cartas.map((carta, index) => {
          return (
            <Carta
              key={index}
              id={carta.id}
              cor={carta.cor}
              virado={carta.virado}
              onClick={() => alteracao(carta, index)}
            />
          )
        })
      }
    </View>

  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 25
  }
})

export default Mesa
