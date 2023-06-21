import { Footer, Header} from "./index";
import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
   return (
      <div className="wrapper">
         <Header/>
         <div className="main">
          <Outlet/>
         </div>
         <Footer/>
      </div>
   );
};
export default Layout;