import { useEffect, useState } from "react"
import Button from "../components/Button"
import Container from "../components/Container"
import cat1 from "../public/cat1.jpg"
import cat0 from "../public/cat0.jpg"

const PageBody = ({title, images}) => {
  const [index, setIndex] = useState();
  const [image, setImage] = useState()
  // useState(images[index])

  function changeImage() {
    // index = (index + 1) % images.length
    // index++
    // console.log(index);
    console.log(index)
    console.log((index + 1) % images.length)
    setIndex((index + 1) % images.length)
    setImage(images[index]);
    console.log(index)
  }

  useEffect(()=>{
    setIndex(0)
    setImage(images[index])
  }, [])
  
  return (
    <div>
      <h1>{title}</h1>
      <Container url={image}/>
      <Button onclick={changeImage}/>
    </div>
  )
}

export default PageBody
