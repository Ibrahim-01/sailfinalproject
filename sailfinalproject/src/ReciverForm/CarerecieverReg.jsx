import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { message, Steps } from 'antd';
import Recieveraccount from './Recieveraccount';
import Beneficiary from './Beneficiary';
import Payment from './Payment';







const CreateAccount = () => {


  const [formData, setFormData] = useState({
    // Beneficiary fields
    beneficiaryFullName: '',
    beneficiaryEmail: '',
    beneficiaryPhone: '',
    beneficiaryGender: '',
    beneficiaryMaritalStatus: '',

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
      title: 'Registration',
      content: <Recieveraccount
        beneficiaryGender={formData.beneficiaryGender}
        beneficiaryMaritalStatus={formData.beneficiaryMaritalStatus}
        handleChange={handleChange}
        beneficiaryPhone={formData.beneficiaryPhone}
      />,
    },
    {
      title: 'Add Beneficiary',
      content: <Beneficiary/>,
    },
    {
      title: 'Make Payment',
      content: <Payment/>,
    },
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
        <Steps current={current} items={items} className='px-5 py-7 fixed top-[5rem] bg-white' />
        <div className="steps-content lg:w-[80rem] lg:m-auto">{steps[current].content} </div>
        <div className="steps-action m-auto flex gap-5 w-10">
        {current > 0 && (
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
             onClick={() => prev()} className="  rounded-lg font-Poppins px-[20px] py-[5px] border-emerald-500 border-2 text-emerald-500 hover:border-white hover:text-white hover:bg-gradient-to-r from-emerald-500 to-lime-300  first-letter:justify-center items-center   focus:outline-none focus:shadow-outline"> Previous </motion.button>


          )}
          {current < steps.length - 1 && (
            <motion.button onClick={() => next()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
             className="text-white rounded-lg font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> Next </motion.button>
          )}
          {current === steps.length - 1 && (
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => message.success('Processing complete!')} className="text-white rounded-lg font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> Submit </motion.button>

          )}
      
        </div>
      </>
    );
  };









  return (
    <div className="flex py-24  font-Poppins flex-col ">
      <ProgressB />
    </div>
  );
};

export default CreateAccount;