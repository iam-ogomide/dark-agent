import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    //for when scrolling, navbar will be sticky
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
            window.addEventListener('scroll', handleScroll);

            return() => {
                window.addEventListener('scroll', handleScroll);
            }
        }
    })

    //navlink items
    const navlinks = [
        {link: 'Home', path:'home'},
        {link: 'About', path:'about'},
        {link: 'Services', path:'services'},
        {link: 'Portfolio', path:'portfolio'},
        {link: 'Blog', path:'blog'},
        {link: 'Contact', path:'contact'},
    ]
    
  return (
    <header className='w-full bg-dark z-20 fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-dark transition-all duration-300 ease-in" : "transition-all duration-300 ease-in"}`}>
            {/* For large devices */}
            <div className="flex justify-between items-center text-base gap-8">
                <a href="/" className="text-white text-3xl font-bold"><span className='text-orange'>A</span>rino</a>

                {/* menu item for large devices  */}
                <ul className='md:flex space-x-12 hidden navitems'>
                    {
                        navlinks.map(({link,path}) => <Link to={path} key={path} activeClass='active' spy={true} smooth={true} offset={-100} className='block text-base text-white uppercase hover:text-orange cursor-pointer'>{link}</Link>)
                    }
                </ul>

                <div className="space-x-12 hidden lg:flex items-center">
                    <button className='bg-transparent text-white p-2 border rounded-full'>
                        <FaBarsStaggered className='w-4 h-4 hover:text-orange'/>
                    </button>
                </div>


                {/* Menu btn for smaller devices  */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none" onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaXmark className='h-6 w-6'/> : <FaBarsStaggered className='h-6 w-6' />
                        }
                    </button>
                </div>
            </div>


            {/* nav items for smaller devices  */}
            <div className={`space-y-4 px-4 mt-14 py-7 bg-dark transition-all duration-300 ease-in ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navlinks.map(({link,path}) => <Link to={path} key={path} activeClass='active' spy={true} smooth={true} offset={-100} className='block text-base text-white uppercase hover:text-orange cursor-pointer'>{link}</Link>)
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar