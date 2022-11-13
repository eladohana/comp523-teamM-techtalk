import { useEffect, useState } from "react"
import PageBody from "../components/PageBody"
import Button from "../components/Button"
import Container from "../components/Container"
import cat1 from "../public/cat1.jpg"
import cat0 from "../public/cat0.jpg"

const cats = () => {
  const images = [cat1, cat0]
  
  return (
    <PageBody title="Cats" images={images}/>
  )
}

export default cats
