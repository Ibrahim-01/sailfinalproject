import React from 'react'
import Hero from '../component/Hero'

import Services from '../pages/Services'
import Hirecaregivers from './Hirecaregivers'
import Contact from '../pages/Contact'
import Caregivers from './Caregivers'
// import Headers from '../Dashboard/Headers'



const Home = () => {
  return (
    <div className='md:mt-40 mt-36 drop-in-2' id='home'>
        <Hero/>
        <Services/>
        <Hirecaregivers/>
       <Caregivers/>
        <Contact/>    
    </div>
  )
}

export default Home