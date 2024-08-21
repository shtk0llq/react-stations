// @ts-check

import { useEffect, useState } from "react"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all').then((response) => {
      response.json().then((value) => {
        setBreeds(Object.keys(value.message));
      })
    });
  }, [])

  return (
    <>
      <select>
        {breeds?.map((breed) => 
          <option key={breed} value={breed} >{breed}</option>
        )}
      </select>
    </>
  )
}

export default DogListContainer
