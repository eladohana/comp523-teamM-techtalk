import { useEffect, useState } from "react"
import Button from "../components/Button"
import Container from "../components/Container"

const PageBody = ({title, images}) => {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[index])
  
  function changeImage() {
    setIndex((index + 1) % images.length)
    setImage(images[index]);
  }
  console.log(images)

  useEffect(()=>{
    setIndex(0)
    setImage(images[index])
  }, [images])
  
  return (
    <div>
      <h1>{`${title ? title[0].toUpperCase() + title.slice(1) : ""}`}</h1>
      <Container url={image}/>
      <Button onclick={changeImage}/>
    </div>
  )
}

export default PageBody
