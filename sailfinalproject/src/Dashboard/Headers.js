import React from "react";
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import { Layout, notification } from "antd";
import bellIcon from "../Assets/bell.svg";
// import profile from "../Assets/Account circle.svg";
import dashboard from "../Assets/ViewGridOutline.svg";
import firstKit from "../Assets/ph_first-aid-kit-light.svg";

import clipBoard from "../Assets/clipboard.svg";
import logout from "../Assets/log-out.svg";
import moonProfile from "../Assets/iconamoon_profile-fill.svg";
import Profile2 from "../Assets/iconamoon_profile-circle-light.svg";
// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Link from "antd/es/typography/Link";

import Modals from "./Modals";
// import Feedback from "./Feedback";
import { Outlet, Link } from "react-router-dom";
// import bed from "../Assets/mdi_bed.svg";
// import board from "../Assets/ClipboardListOutline.svg";
// import profile from "../Assets/Account circle.svg";
// import { theme } from "antd";
// import { Content } from "antd/es/layout/layout";

// import Feedback from "./Feedback";
const { Header, Sider } = Layout;
const Headers = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  // const topCards = [
  //   {
  //     patientState: "Number of Elderly",
  //     patientNumber: "1",
  //     image: profile,
  //   },
  //   {
  //     patientState: "Number of Visits",
  //     patientNumber: "5",
  //     image: bed,
  //   },
  //   {
  //     patientState: "Active Subscription",
  //     patientNumber: "2",
  //     image: board,
  //   },
  // ];
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  const [api] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: (
        <motion.div
          className="font-[caveat-brush]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 1 }}
        >
          <p>Notification Title</p>
        </motion.div>
      ),
      description:
        "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
      duration: 0,
    });
  };
  // const topCards = [
  //   {
  //     patientState: "Number of Elderly",
  //     patientNumber: "1",
  //     image: profile,
  //   },
  //   {
  //     patientState: "Number of Visits",
  //     patientNumber: "5",
  //     image: bed,
  //   },
  //   {
  //     patientState: "Active Subscription",
  //     patientNumber: "2",
  //     image: board,
  //   },
  // ];

  return (
    <>
      <Layout className="min-h-screen w-full ">
        <Sider
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="shadow-sm shadow-[grey]"
        >
          <div className=" flex flex-col gap-[400px] px-5 mt-[92px]">
            <div className=" grid gap-[32px]">
              <Link to="/">
                <div className=" flex items-center justify-start text-[1.1rem] gap-2">
                  <img src={dashboard} alt="" className=" h-[35px] w-[35px]" />
                  <p className=" ">Dashboard</p>
                </div>
              </Link>
              <Link to="/feedback">
                <div className=" flex items-center justify-start text-[1.1rem] gap-2">
                  <img
                    src={clipBoard}
                    alt=""
                    className=" h-[25px] w-[25px] text-black"
                  />
                  <p>Feedback</p>
                </div>
              </Link>

              <div className=" flex items-center justify-start text-[1.1rem] gap-2">
                <img src={firstKit} alt="" className=" h-[27px] w-[27px]" />
                <p className=" ">Prescription</p>
              </div>

              <Link to="/caregiver">
                <div className=" flex items-center justify-start gap-2 ">
                  <img
                    src={moonProfile}
                    alt=""
                    className=" h-[27px] w-[27px]"
                  />
                  <p className="text-[1rem] ">Request Form</p>
                </div>
              </Link>
            </div>
            <div className=" grid gap-[32px]">
              <div className=" flex items-center justify-start text-[1.1rem] gap-2">
                <img src={Profile2} alt="" className=" h-[27px] w-[27px]" />
                <p className=" ">My Profile</p>
              </div>
              {/* <div className=" flex items-start justify-start text-[1.1rem] gap-2">
                <img src={logout} alt="" className=" h-[27px] w-[27px]" />
                <p>Logout</p>
              </div> */}
              <Link to="/logout">
                <div className=" flex items-center justify-start text-[1.1rem] gap-2">
                  <img src={logout} alt="" className=" h-[17px] w-[17px]" />
                  <Modals />
                  {/* <p>Logout</p> */}
                </div>
              </Link>
            </div>
          </div>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              // background: colorBgContainer,
            }}
          >
            <div className="flex items-center font-[poppins-regular] bg-white justify-between px-24">
              <p className="font-[poppins-regular] text-[5rem] mr-[0.5rem] sm:mr-[0.5rem] md:text-[1.1rem]">
                Hi User, Welcome
              </p>
              <div className="flex font-[poppins-regular] items-center justify-center w-15 h-15">
                <div
                  className="bg-white rounded-full shadow-md font-[poppins-regular] flex items-center justify-center cursor-pointer w-8 h-8"
                  onClick={openNotification}
                >
                  <img src={bellIcon} alt="bell Icon" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </Header>
          <Outlet />
          {/* <Content
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
                    <h3 className=" font-semibold px-[20] py-[24px]">
                      Service Plan
                    </h3>
                    <h3 className=" font-semibold px-[20] py-[24px]">
                      Visits Remaining
                    </h3>
                    <h3 className=" font-semibold px-[20] py-[24px]">
                      Duration
                    </h3>
                    <h3 className=" font-semibold px-[20] py-[24px]">
                      Expiration Date
                    </h3>
                    <h3 className=" font-semibold px-[20] py-[24px]">Status</h3>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </Content> */}
        </Layout>
      </Layout>
    </>
  );
};
export default Headers;
