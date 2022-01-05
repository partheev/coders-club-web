import React from 'react'
import './about.css'
export const About = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold  ml-16 mt-14 underline'>ABOUT</h1>
      <div className='titlesx flex flex-row justify-center mt-20'>
        <div>
          <img
            className=' rounded-md about-images w-60 h-52'
            src='./letscode.jpg'
            alt='letscode'
          />
        </div>
        <div className='ml-16 w-1/2'>
          <h2 className='text-3xl'>Vision</h2>
          <p className='font-mono mt-4'>
            Coding is a basic literacy in the digital age, and kids need to
            understand and work with and understand the technology around them.
            Having children learn coding at a young age prepares them for the
            future. Coding helps children with communication, creativity, math,
            writing, and confidence.
          </p>
        </div>
      </div>
      <div className='titlesx flex flex-row justify-center mt-20'>
        <div className='ml-16 w-1/2'>
          <h2 className='text-3xl'>Mission</h2>
          <p className='font-mono mt-4'>
            A unique series that provides a framework for teaching coding
            skills. In Black Flag – A Coding Club Mission, your problem solving
            skills are tested as you join Cal on a dangerous adventure into the
            underground world of the anarchists who are fighting to restore
            freedom to the citizens of New Edgehill.{' '}
          </p>
        </div>
        <div>
          <img
            className='rounded-md about-images w-60 h-52 '
            src='./download_about.jpg'
            alt='letscode'
          />
        </div>
      </div>
      <div className='titlesx flex flex-row justify-center mt-20'>
        <div>
          <img
            className='rounded-md about-images w-60 h-52'
            src='./volunteers.jpg'
            alt='letscode'
          />
        </div>
        <div className=' ml-16 w-1/2'>
          <h2 className='text-3xl'>Volunteers</h2>
          <p className='font-mono mt-4'>
            Coding is a basic literacy in the digital age, and kids need to
            understand and work with and understand the technology around them.
            Having children learn coding at a young age prepares them for the
            future. Coding helps children with communication, creativity, math,
            writing, and confidence.
          </p>
        </div>
      </div>
    </div>
  )
}
