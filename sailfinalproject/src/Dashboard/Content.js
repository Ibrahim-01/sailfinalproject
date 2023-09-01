import React from "react";
import bed from "../Assets/images/mdi_bed.svg";
import board from "../Assets/images/ClipboardListOutline.svg";
import profile from "../Assets/images/Account circle.svg";
import { theme } from "antd";
import { Content } from "antd/es/layout/layout";

const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const topCards = [
    {
      patientState: "Number of Elderly",
      patientNumber: "1",
      image: profile,
    },
    {
      patientState: "Number of Visits",
      patientNumber: "5",
      image: bed,
    },
    {
      patientState: "Active Subscription",
      patientNumber: "2",
      image: board,
    },
  ];
  return (
    <Content
      style={{
        margin: "24px 16px 0",
      }}
    >
      <div
        style={{
          padding: 48,
          minHeight: 360,
          background: colorBgContainer,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems:"center"
          gap: "126px",
        }}
      >
        <div className=" flex item-center justify-between gap-[116px]">
          {topCards.map((card, index) => {
            return (
              <div
                key={index}
                className="h-[8rem] w-[20rem] bg-[#41B282] px-[2rem] justify-center rounded-sm flex flex-col  shadow-md gap-[1rem]"
              >
                <h1 className="font-regular  text-white font-[poppins-regular] text-[1.2rem] font-bold">
                  {card.patientState}
                </h1>
                <div className="flex justify-between">
                  <h1 className="font-bold text-center text-[1.5rem] justify-between text-white font-[poppins-regular]">
                    {card.patientNumber}
                  </h1>
                  <img src={card.image} alt="card-icon" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-[0.4px] rounded-md border-[#a7a2a2] shadow-md h-[11rem] w-[100%] p-5">
          <h1 className=" font-[poppins-bold] text-[2rem] uppercase text-[#9a9a9a]">
            Recent Visits
          </h1>
          <hr />
          <p className="mt-10 cursor-pointer text-red-500 underline text-[1rem]">
            No Visits Yet
          </p>
        </div>
        <div className="border-[0.4px] rounded-md border-[#a7a2a2] shadow-md h-[11rem] w-[100%] p-5">
          <h1 className=" font-[poppins-bold] text-[2rem] uppercase text-[#9a9a9a] mb-2 ">
            My Subscriptions
          </h1>
          <hr />
          <div className="border-[0.4px] border-[#a7a2a2]">
            <div className=" flex items-center justify-between px-3">
              <h3 className=" font-semibold border-r-2">Patient Name</h3>
              <h3 className=" font-semibold px-[20] py-[24px]">Service Plan</h3>
              <h3 className=" font-semibold px-[20] py-[24px]">
                Visits Remaining
              </h3>
              <h3 className=" font-semibold px-[20] py-[24px]">Duration</h3>
              <h3 className=" font-semibold px-[20] py-[24px]">
                Expiration Date
              </h3>
              <h3 className=" font-semibold px-[20] py-[24px]">Status</h3>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Main;
