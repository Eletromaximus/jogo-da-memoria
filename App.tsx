// eslint-disable-next-line no-use-before-define
import React from 'react'
import { StatusBar } from 'expo-status-bar'

import AppStack from './src/routes/AppStack'

export default function App () {
  return (
    <>
      <StatusBar style="dark" />
      <AppStack />
    </>
  )
}