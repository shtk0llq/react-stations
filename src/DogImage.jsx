// @ts-check

export const DogImage = (props) => {
  const { imageUrl } = props;

  return (
    <>
      <div>
        <img src={imageUrl} alt="dog image" />
      </div>
    </>
  )
}

export default DogImage
