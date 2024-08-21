// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect";
import DogImage from "./DogImage";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(['']);
  const [selectedBreed, setSelectedBreed] = useState('dummy');
  const [breedDogImages, setBreedDogImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all').then((response) => {
      response.json().then((value) => {
        setBreeds(Object.keys(value.message));
      })
    });
  }, [])

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        setBreedDogImages={setBreedDogImages}
      />

      <div className="grid-layout">
        {breedDogImages.map((imageUrl) => (
          <DogImage key={imageUrl} imageUrl={imageUrl} />
        ))}
      </div>
    </>
  )
}

export default DogListContainer
