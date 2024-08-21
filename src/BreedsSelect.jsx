// @ts-nocheck

// @ts-ignore
export const BreedsSelect = (props) => {
  const { breeds, selectedBreed, setSelectedBreed, setBreedDogImages } = props

  async function fetchSelectBreedDog() {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/9`).then((response) => {
      response.json().then((value) => {
        setBreedDogImages(value.message)
      })
    })
  }

  return (
    <>
      <div className="container">
        <div className="select-box">
          <label htmlFor="breed" className="label">Breeds List</label>
          <select
            id="breed"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="select"
          >
            {/* <option value="">-- Please choose an Breed --</option> */}
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          <button className="button" onClick={fetchSelectBreedDog}>表示</button>
        </div>
      </div>
    </>
  )
}

export default BreedsSelect
