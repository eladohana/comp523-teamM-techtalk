import Image from "next/image"
const Container = ({url}) => {
  return (
    <div>
      <Image 
        src={url}
        width={"100%"}
        height={"100%"}
        />
    </div>
  )
}

export default Container
