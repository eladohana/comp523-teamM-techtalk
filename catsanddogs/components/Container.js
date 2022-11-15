import Image from "next/image"
import ContainerStyles from "../styles/Container.module.css"

const Container = ({url}) => {
  console.log(url)
  return (
    <div className={ContainerStyles.container}>
      <Image 
        alt=""
        src={`/${url}`}
        
        width={500}
        height={300} 
      />
    </div>
  )
}

export default Container
