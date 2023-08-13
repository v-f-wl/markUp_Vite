import { useState} from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const MenuItems = ({respons}) => {
    return (
      <ul 
        className={`
          ${respons ? 'flex sm:hidden' : 'sm:flex hidden'} 
          ${respons && 'flex-col'} 
          list-none 
          justify-end 
          items-center 
          flex-1 
          gap-12
        `}
      >
        {navLinks.map((navLink, index) => (
          <li key={navLink.id} className={`font-poppins font-normal cursor-pointer text-lg text-white hover:text-cyan-400 transition-colors`}>
            <a href={`#{nav.id}`} className="">
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className='w-[124px] h-[34px]'/>
      <MenuItems respons={false}/>
      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggleMenu ? close : menu} 
            alt='Logo'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggleMenu(prev => !prev)}
          />
          <div 
            className={`${toggleMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <MenuItems respons={true}/>
          </div>
      </div>
    </div>
  )
}

export default Navbar