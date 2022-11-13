import { useEffect, useState } from "react"
import Button from "../components/Button"
import Container from "../components/Container"
import cat1 from "../public/cat1.jpg"
import cat0 from "../public/cat0.jpg"

const cats = () => {
  const [image, setImage] = useState()

  function changeImage() {
    setImage(image == cat1 ? cat0 : cat1);
  }

  useEffect(()=>{
    setImage(cat1)
  }, [])
  
  return (
    <div>
      <h1>Cats</h1>
      <Container url={image}/>
      <Button onclick={changeImage}/>
    </div>
  )
}

export default cats
