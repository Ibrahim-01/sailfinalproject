import React, { useState } from 'react';
import { motion } from 'framer-motion'
import Caregivers from './Biodata';
import Info from './Info';
import Guarantor from '../GiverForm/Guarantor';
import { message, Steps } from 'antd';







const CreateAccount = () => {


  const [formData, setFormData] = useState({
    // Caregivers fields
    CaregiversFullName: '',
    CaregiversEmail: '',
    CaregiversPhone: '',
    CaregiversGender: '',
    CaregiversMaritalStatus: '',

    // Other Information fields
    religion: '',
    yearGraduated: '',
    medicalSchool: '',
    mdcnNumber: '',
    category: '',
    bankAccountNumber: '',
    country: '',
    state: '',
    city: '',
    town: '',
    localGovt: '',

    // Guarantor fields
    guarantorFullName: '',
    guarantorEmail: '',
    guarantorPhone: '',
    agreement: false,

    // Payment plan field
    paymentPlan: '',
  });


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the necessary action when the form is submitted
    // For example, you can save the form data or navigate to the next page
  };

  const steps = [
    {
      title: 'Caregivers',
      content: <Caregivers
        CaregiversGender={formData.CaregiversGender}
        CaregiversMaritalStatus={formData.CaregiversMaritalStatus}
        handleChange={handleChange}
        CaregiversPhone={formData.CaregiversPhone}
      />,
    },
    {
      title: 'Guarantor',
      content:  <Info />,

    },
    {
      title: 'Finished',
      content: <Guarantor />,    },
  ];


  const ProgressB = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    return (
      <>
        <Steps current={current} items={items} className='px-10 py-7 fixed top-[5rem] bg-white' />
        <div className="steps-content lg:w-[80rem] lg:m-auto">{steps[current].content} </div>
        <div className="steps-action m-auto flex gap-5 w-10">
        {current > 0 && (
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} onClick={() => prev()} className="  rounded-lg font-Poppins px-[20px] py-[5px] border-emerald-500 border-2 text-emerald-500 hover:border-white hover:text-white hover:bg-gradient-to-r from-emerald-500 to-lime-300  first-letter:justify-center items-center   focus:outline-none focus:shadow-outline"> Previous </motion.button>


          )}
          {current < steps.length - 1 && (
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => next()} className="text-white rounded-lg font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> Next </motion.button>
          )}
          {current === steps.length - 1 && (
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => message.success('Processing complete!')} className="text-white rounded-lg font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> Done </motion.button>

          )}
      
        </div>
      </>
    );
  };









  return (
    <div className="flex py-36 font-Poppins flex-col ">
      <ProgressB />
    </div>
  );
};

export default CreateAccount;