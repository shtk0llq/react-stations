// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg');

  return (
    <>
      <header>
        TechTrain App
      </header>

      <h2>犬の画像を表示するサイトです。</h2>

      <img src={dogUrl} alt='dog image' />
    </>
  )
}
