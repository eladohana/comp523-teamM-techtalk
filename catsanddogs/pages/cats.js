import Container from "../components/Container"
import cat1 from "../public/cat1.jpg"

const cats = () => {
  return (
    <div>
      Cats
      <Container url={cat1}/>
    </div>
  )
}

export default cats
