import React from 'react'
import poster from '../../images/event.jpg'
const Events = () => {
  const RegForm = () => {
    return (
      <form className='w-full  '>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className=' w-2/4  px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              Name
            </label>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-2/4 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              Roll No.
            </label>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-2/4 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              Branch
            </label>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-2/4 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              Comment on Event
            </label>
            <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
          </div>
        </div>
      </form>
    )
  }
  const EventDetails = () => {
    const Head = ({ title }) => {
      return <div className='font-bold pr-3'> {title}</div>
    }
    const Detail = ({ detail }) => {
      return <div className='pl-3'>{detail}</div>
    }
    const Point = ({ title, detail }) => {
      return (
        <div className='flex py-1'>
          <Head title={title} />:
          <Detail detail={detail} />
        </div>
      )
    }
    return (
      <div className=''>
        <img
          src={poster}
          className='m-auto rounded-lg  max-w-[80rem] h-[30rem] w-full'
        ></img>
        <div className=' '>
          <h1 className='font-bold mt-3'>Event Details</h1>
          <p>
            {' '}
            This event is all about Fun with Patterns. In this session we are
            going to give a brief logic behind some well known patterns. The
            session is open for all and is going to be an informative session in
            an interaction mode. The session is open for all the enthusiasts.
            The interested students can join us at the session to make it more
            successful.
          </p>
          <div className='mt-5'>
            <Point title={'Venue'} detail={'CCC Lab'} />
            <Point title={'Team Size'} detail={'2-3'} />
            <Point title={'Timings'} detail={'1:30 PM to 6:00 PM'} />
          </div>
        </div>
      </div>
    )
  }
  const EventsList = () => {
    return (
      <div>
        <ul>
          <li>1. Hertx</li>
        </ul>
      </div>
    )
  }
  return (
    <div className=' max-w-[80rem] m-auto mt-10 w-[90%] rounded-lg p-5 pb-10 bg-white '>
      <h1 className='font-bold text-2xl underline'>
        Register for Coders Club Events
      </h1>
      {/* <EventsList /> */}
      <div className='py-10'>
        <EventDetails />
      </div>
      <RegForm />
      <span className='inline-block p-3  rounded-md text-white cursor-pointer bg-blue-400'>
        Submit Form
      </span>
    </div>
  )
}

export default Events
