import React from 'react'
import { NavLink } from 'react-router-dom'
const navitemsdata = [
  {
    name: 'Home',
    route: '/coders-club-web/home',
  },
  {
    name: 'About',
    route: '/coders-club-web/about',
  },
  {
    name: 'Events',
    route: '/coders-club-web/events',
  },
  {
    name: 'Contact Us',
    route: '/coders-club-web/contactus',
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
          <div
            key={e.route}
            className='m-4 p-2 hover:bg-blue-400 hover:text-white rounded'
          >
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
      <img src={require('../images/logo.png')} className='m-2 rounded'></img>
      <NavItems />
    </div>
  )
}

export default Header
