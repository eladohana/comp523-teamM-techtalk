import PageBody from "../components/PageBody"

import dog1 from "../public/dog1.jpg"
import dog2 from "../public/dog2.jpg"
import dog3 from "../public/dog3.jpg"


const dogs = () => {
  const images = [dog1, dog2, dog3]
  
  return (
    <PageBody title="Dogs" images={images}/>
  )

}

export default dogs
