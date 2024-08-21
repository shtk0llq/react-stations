// DO NOT DELETE

import { useState } from 'react'
import './App.css'
import Header from './Header'
import Description from './Description'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <>
      <Header />

      <Description />
    </>
  )
}
