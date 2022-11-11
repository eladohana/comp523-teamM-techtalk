import Link from "next/link"
import NavStyles from "../styles/NavBar.module.css"
const NavBar = () => {
  return (
    <navbar>
      <Link href="/" className={NavStyles.navitem}>Home</Link>
      <Link href="/cats" className={NavStyles.navitem}>Cats</Link>
      <Link href="/dogs" className={NavStyles.navitem}>Dogs</Link>
    </navbar>
  )
}

export default NavBar
