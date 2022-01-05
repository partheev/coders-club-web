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
]
const Header = () => {
  const NavItem = ({ item }) => {
    return (
      <NavLink to={item.route}>
        <div className='p-3'>{item.name}</div>
      </NavLink>
    )
  }
  const NavItems = () => {
    return (
      <div className='flex'>
        {navitemsdata.map((e) => (
          <NavItem item={e} />
        ))}
        {/* <NavItem /> */}
      </div>
    )
  }
  return (
    <div className=' px-5 flex justify-between items-center bg-blue-300'>
      <h1 className='m-2'>Coders club</h1>
      <NavItems />
    </div>
  )
}

export default Header
