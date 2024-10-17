import React from 'react'
import SideBar from '../components/templates/SideBar'
import Main from '../components/templates/Main'

function HomePage() {
  return (
    <div className='container mx-auto grid grid-cols-12'>
      <div className='col-span-2'>
      <SideBar/>

      </div>
      <div className='col-span-10'>

      <Main/>
      </div>
    </div>
  )
}

export default HomePage