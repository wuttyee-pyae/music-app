"use client";
import "tailwindcss/tailwind.css";
import "@/styles/global.css";
import Asidebar from "@/components/desktop/sidebar/Asidebar";
import Glass from "@/components/desktop/login/Glass";

import { NavbarWrapper } from "@/components/desktop/nav/NavbarWrapper";
import Footer from "@/components/desktop/Footer";
import { Providers } from "./providers";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import Logobar from "@/components/desktop/sidebar/Logobar";
import BackNext from "@/components/desktop/nav/BackNext";

import { store } from "../../../redux/store";
import SidebarProvider from "../../../context/SidebarContext";
import Desktop from "./page";
import { useRouter } from 'next/navigation'


export default function DesktopRootLayout({children} : {
  children : React.ReactNode 
}) {
  console.log("Desktop")
  const router = useRouter()
  router.push('/desktop')
  return (
    
   <section>
        <SidebarProvider>
        <Providers>
          <Provider store={store}>
            <div className="layout">
              <div className="flex hederbar items-center">
                <div className="w-auto logobar">
                  <Logobar />
                </div>
                <div className="w-auto">
                  <BackNext />
                </div>
                <div className="flex-auto">
                  <NavbarWrapper />
                </div>
              </div>
              <Glass className="w-full mx-auto top-area">
                
                  <Asidebar />
                
                <div className="p-0 lg:ml-64">
                  <div className="mb-4 pb-36 min-h-screen">
                    <div className="drop-shadow-xl">
                    <main className="layout__main-content">{children}</main>
                    {/* <Desktop/> */}
                    </div>
                  </div>
                </div>
              </Glass>
            </div>

            <div className="">
              <Footer />
            </div>
          </Provider>
        </Providers> 
        </SidebarProvider>
        </section>
  );
}
