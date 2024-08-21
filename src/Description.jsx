// @ts-check

import { useState } from "react"
import DogImage from "./DogImage"

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg',
  )

  async function handleFetchDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const json = await response.json()
    setDogUrl(json.message)
  }

  return (
    <>
      <h2>犬の画像を表示するサイトです。</h2>

      <DogImage imageUrl={dogUrl} />

      <button onClick={handleFetchDogImage} className="button">
        更新
      </button>
    </>
  )
}

export default Description
