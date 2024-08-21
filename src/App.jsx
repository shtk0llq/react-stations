// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg');

  async function handleFetchDogImage () {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await response.json();
    setDogUrl(json.message);
  }

  return (
    <>
      <header className='header'>
        TechTrain App
      </header>

      <h2>犬の画像を表示するサイトです。</h2>

      <div>
        <img src={dogUrl} alt='dog image' />
      </div>

      <button onClick={handleFetchDogImage} className='button'>
        更新
      </button>
    </>
  )
}
