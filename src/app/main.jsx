"use client"
import React from 'react'
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import Drawer from "@/Components/Drawer";
import { useState } from "react";

export default function Main({ children }) {
  const [isDrawerOpen, toggleDrawer] = useState(false);

  function handleDrawer() {
    toggleDrawer((prev) => !prev);
  }

  return (
    <>
      <NavBar handleDrawer={handleDrawer} />
      {isDrawerOpen ? <Drawer

        

        handleDrawer={handleDrawer} /> : <></>}
      {children}
      <Footer />
    </>
  )
}
