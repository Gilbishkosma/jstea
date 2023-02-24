import React from "react";
import CustomNavbar from "./Navbar";

const Layout = ({ children }) => {
    return <>
        <CustomNavbar />
        {children}
    </>
}

export default Layout;