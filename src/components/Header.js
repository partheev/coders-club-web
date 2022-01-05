import React from 'react'
import { NavLink } from 'react-router-dom'
const navitemsdata = [
  {
    name: 'Home',
    route: '/home',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Events',
    route: '/events',
  },
  {
    name: 'Contact Us',
    route: '/contactus',
  },
]
const Header = () => {
  const NavItem = ({ item }) => {
    return (
      <NavLink
        className={(isactive) => (isactive.isActive ? 'bg-white rounded' : '')}
        to={item.route}
      >
        <div className=''>{item.name}</div>
      </NavLink>
    )
  }
  const NavItems = () => {
    return (
      <div className='flex items-center'>
        {navitemsdata.map((e) => (
          <div className='m-4 p-2 hover:bg-blue-400 hover:text-white rounded'>
            <NavItem item={e} />
          </div>
        ))}

        <div
          onClick={() => window.open('https://www.gprec.ac.in/')}
          className='bg-blue-400 cursor-pointer p-2 rounded text-white'
        >
          College Site
        </div>
      </div>
    )
  }
  return (
    <div className='shadow-lg   px-5 flex justify-between items-center bg-white'>
      <img src='./logo.png' className='m-2 rounded'></img>
      <NavItems />
    </div>
  )
}

export default Header
