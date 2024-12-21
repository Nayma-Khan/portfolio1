import Link from "next/link"
import logo from "/public/logo.avif"
import Image from "next/image"


const Header = () => {
  return (

    <header className="flex justify-between max-w-screen-xl px-3 sticky top-0 py-3 font-serif">
        {/* logo */}
    
<div className="flex space-x-1">
<Image src={logo} alt="icon" width={50} height={30} />
        <h1 className="text-xl font-bold">NK</h1>
        </div>
        
        {/* navigation */}
        <ul className="flex space-x-16 px-12 py-4 font-bold">
            <li>
                <Link href="/" >Home</Link>
                </li>


            <li>
                
            <Link href="/Skill" >Skills</Link>
                </li>

            <li>
            <Link href="/Projects">Projects</Link>
                </li>

            <li>
            <Link href="/Contact">Contact</Link>
                </li>

        </ul>



    </header>

  )
}

export default Header
