// @ts-check

// @ts-ignore
export const DogImage = (props) => {
  const { imageUrl } = props;

  return (
    <>
      <div className="image-box">
        <img src={imageUrl} alt="dog image" className="image" />
      </div>
    </>
  )
}

export default DogImage
