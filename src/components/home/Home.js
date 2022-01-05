import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.css'
export const Home = () => {
  return (
    <div className='bg-cyan-600'>
      <div className={styles.homebg}>
        <div>
          <h1 className='uppercase text-white font-bold text-3xl'>
            Coder's Club
          </h1>
          <h1 className='text-white font-bold text-xl py-2'>
            Enhance your skills by with joining us.
          </h1>
          <h1 className='text-white font-bold text-lg py-2'>
            You can't always be the most talented in the room, but you can be
            the most competitive !
          </h1>
          <Link to={'/coders-club-web/events'}>
            <span className='  mt-5 inline-block text-white font-bold bg-cyan-600 p-2  rounded-md'>
              Join Event
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
