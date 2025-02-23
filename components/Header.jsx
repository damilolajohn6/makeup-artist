import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className='py-8 xl:py-12  '>
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className="text-4xl font-semibold">Danna <span className="text-accent">Makeup</span></h1>
            </Link>
            <div className="hidden xl:flex  gap-8">
                <Nav />
            </div>

            <div className="xl:hidden">
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header
