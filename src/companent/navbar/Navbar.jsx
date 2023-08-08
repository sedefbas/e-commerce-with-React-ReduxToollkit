import React from 'react'
import NavbarLeft from './navbarItems/NabarLeft'
import NavbarRight from './navbarItems/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-5'>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar
