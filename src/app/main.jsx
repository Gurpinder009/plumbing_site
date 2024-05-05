"use client"
import React from 'react'
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import Drawer from "@/Components/Drawer";
import { useState } from "react";

export default function Main({children}) {
    const [isDrawerOpen, toggleDrawer] = useState(true);

    function handleDrawer(){
        toggleDrawer((prev)=>!prev);
    }

  return (
    <>
     <NavBar  isDrawerOpen={isDrawerOpen} handleDrawer={handleDrawer} />
        {isDrawerOpen ? <Drawer /> : <></>}
        {children}
        <Footer /> 
    </>
  )
}
