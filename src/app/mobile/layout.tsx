"use client";
import "tailwindcss/tailwind.css";

import "@/styles/global.css";
import Asidebar from "@/components/sidebar/Asidebar";
import Glass from "@/components/login/Glass";

import { NavbarWrapper } from "@/components/nav/NavbarWrapper";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";

import React from "react";
import Logobar from "@/components/sidebar/Logobar";
import BackNext from "@/components/nav/BackNext";
import { store } from "../../../redux/store";
import SidebarProvider from "../../../context/SidebarContext";
import Mobile from "./page";
import { Providers } from "../desktop/providers";


export default function MobileRootLayout({children} : {
  children : React.ReactNode
}) {
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
