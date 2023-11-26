"use client"

import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

const Navigation = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return ( 
        <div>
            <Sidebar open={sidebarOpen} toggle={toggleSidebar} />
            <Navbar toggle={toggleSidebar} />      
        </div>
    );
}
 
export default Navigation;