import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import Header from "./components/Header";
import ServiceNow from "./components/ServiceNow";
import AzureSSO from "./components/AzureSSO";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const AppMain = () => {
  return (
    <>
      {/* <div className="App Main"> */}
      {/* <Header /> */}
      {/* <div className="content-Wrap"> */}
      {/* <Login /> */}
      {/* <ServiceNow/> */}
      {/* <AzureSSO/> */}
      {/* </div> */}
      {/* </div> */}

      <BrowserRouter>
        {/* <Suspense fallback={<>Loding Page...</>}> */}
          <Header />
          <Routes>
            <Route index element={<Login />} />
            <Route exect path="/servicenow" element={<ServiceNow />} />
            <Route exect path="/azuresso" element={<AzureSSO />} />
          </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppMain />);
