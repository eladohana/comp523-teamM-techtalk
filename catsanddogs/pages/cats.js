import { useEffect, useState } from "react"
import Button from "../components/Button"
import Container from "../components/Container"
import cat1 from "../public/cat1.jpg"
import cat0 from "../public/cat0.jpg"

const cats = () => {
  const [image, setImage] = useState(cat1)

  let catImage = cat1

  function changeImage() {
    // console.log(catImage)
    catImage = cat1 ? cat0 : cat1;
    // useEffect();
  }

  useEffect(()=>{
    console.log(catImage, image)
    setImage(catImage)
  }, [image])
  
  return (
    <div>
      <h1>Cats</h1>
      <Container url={catImage}/>
      <Button onclick={changeImage}/>
    </div>
  )
}

export default cats
