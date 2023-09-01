import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const Modals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal} className=' border-none text-[1rem]'>
      Logout
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={"CONFIRM"} okType='default' width={400} >
        <p className=' font-bold'>ARE YOU SURE YOU WANT TO LOGOUT</p>
      </Modal>
    </>
  );
};
export default Modals;