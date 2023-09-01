import React from 'react'
import Button from '../component/Button'
import Care from '../Assets/care.png'
import health from '../Assets/health.png'


const Caregivers = () => {
    return (
        <section id='caregivers' class=' isolate overflow-hidden items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols lg:px-6 sm:py-32 drop-up'>
            <div className=' flex flex-col items-center' >
                <div>
                    <h3 className='text-3xl md:text-4xl lg:text-6xl font-Paytone font-bold leading-relaxed lg:w-[60rem] text-emerald-900'>Join Our Compassionate Caregiver Community</h3>
                    <p className='font-Poppins pt-8 pb-8 text:sm md:text-xl lg:text-2xl  '>Make a Difference in Lives, One Heart at a Time</p>
                    <Button text='Become a Caregiver' navigate='/caregiversReg' />
                    <img src={Care} alt="" className='mt-10 mb-10 rounded-3xl' />
                </div>

                <p className='font-Poppins py-3 text:sm md:text-xl lg:text-lg '>We work with qualified nurses and well trained non - medical caregivers  We ensure your Elderly loved one always have the care and companionship they need.</p>
                <p className='font-Poppins py-3 text:sm md:text-xl lg:text-lg '>Whether it's providing companionship, aiding with daily tasks, or offering emotional support, being a caregiver is a calling that requires empathy and a heart full of empathy. As a caregiver, you have the opportunity to foster genuine connections and bring comfort to individuals and families in need</p>
                <p className='font-Poppins py-3 text:sm md:text-xl lg:text-lg '>Our platform is designed to connect caregivers with those seeking a helping hand. You'll have the flexibility to choose your availability, set your own schedule, and select the types of caregiving services you're comfortable with. We're here to support you every step of the way.</p>
            </div>
            <h1 className='font-Poppins font-bold text-3xl  text-emerald-900 pt-12 pb-5'>Benefits</h1>

            <div className='md:grid md:grid-cols-2 xl:grid-cols-3 mb-20'>

                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins font-bold text-xl text-emerald-900 pb-12'>Flexible Schedule</h3>
                    <p className='font-Poppins text-sm '> Set your own working hours to maintain a healthy work-life balancee</p >
                </div>

                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Meaningful Connections</h3>
                    <p className='font-Poppins text-sm '>Build heartwarming relationships while providing essential care</p >
                </div>

                <div className='px-3 pt-3 pb-20 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Competitive Compensation</h3>
                    <p className='font-Poppins text-sm '>Earn competitive compensation for your invaluable caregiving services</p>
                </div>
            </div>
            <Button text='Become a Caregiver' navigate='/caregiversReg' />
        </section>
    )
}

export default Caregivers