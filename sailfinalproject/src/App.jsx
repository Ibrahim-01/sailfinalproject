import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import CaregiversReg from "../src/GiverForm/CaregiverReg";
import Services from "./pages/Services";
import Hirecaregivers from "./pages/Hirecaregivers";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import Recovery from "./pages/Recovery";
import Carerecieverreg from "../src/ReciverForm/CarerecieverReg";
import Caregivers from "./pages/Caregivers";
import Pagenotfound from "./pages/Pagenotfound";








const App = () => {
  return <div className="transition">
    <Navbar />
    <Routes >
      <Route path="/" exact element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/hcaregivers" element={<Hirecaregivers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/caregiversReg" element={<CaregiversReg />} />
      <Route path="/carerecieverreg" element={<Carerecieverreg />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/caregivers" element={<Caregivers/>} />
      <Route path="*" element={<Pagenotfound/>} />
      

    </Routes>
    <Footer />

  </div>;
};

export default App;


