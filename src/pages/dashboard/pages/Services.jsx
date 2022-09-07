import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='mt-6 bg-gray-100'>
      <div className='text-center p-20'>
        <h1 className='text-3xl font-semibold text-gray-700'>Services</h1>
        <p className='text-gray-400'>No services added yet please </p>
        <Link to='/service' className='bg-transparent text-1xl border text-white border-color'>Go to Services</Link>

      </div>
    </div>
  )
}

export default Services