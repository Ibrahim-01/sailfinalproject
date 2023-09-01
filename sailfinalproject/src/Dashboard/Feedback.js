import React from "react";
import { Input } from "antd";
import { Button } from "antd";
const { TextArea } = Input;

const Feedback = () => {

  

  return (
    <div className=" m-4 gap-4 p-2 flex flex-col">
      <div className=" ">
        <h3 className=" font-extrabold">YOUR FEEDBACK</h3>
        <p className=" text-[#6866669a]">Welcome to medicare</p>
      </div>
      <div className=" border-6 border-solid border-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px_8px] shadow-[#e0dede]">
        <div className=" m-4">
        <div>
          <h3 className=" font-semibold">USER FEEDBACK FORM</h3>
          <br />
          <hr />
        </div>
        <div className=" gap-4">
          <h3 className=" font-bold">Hi</h3>
          <p className=" text-[#6866669a]">
            Please take a minute to give us feedback about our sevices by
            fillinf thr short feedback customer service form. We are conducting
            this research in other to measure your level of satisfaction with
            the level of our services.
          </p>
        </div>

        </div>
        <div className=" grid grid-row-[1fr,1fr] sm:grid-cols-[1fr,1fr] gap-4 ">
            <div className=" grid grid-cols-[]1fr,5fr,2fr] gap-4 m-4 p-8 border-6 border-solid border-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px_8px] shadow-[#e0dede]">
          <div>
                <h3  className=" font-semibold">   FEEDBACK FORM   </h3>
                <hr /> 
          </div>
          <div>

            <TextArea className = "topic" rows={1} placeholder="Please enter a topic" maxLength={100} />
            <TextArea rows={8} className="feedback" placeholder="Enter Feedback" maxLength={1000} />
          </div>
          <div>
            <Button type="link" className=" bg-sky-900 text-white">   SUBMIT FEEDBACK  </Button>
          </div>
            </div>
        
        <div className=" border border-solid flex flex-col border-[#dbd8d8b6] my-4 mx-4">
            <div>
            <div>
                <h3 className=" font-semibold m-2">RECENT FEEDBACKS</h3>
                <br />
                <hr />

            </div>
            <p className=" text-red-600 m-2">No Feedbacks Yet</p>

            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
