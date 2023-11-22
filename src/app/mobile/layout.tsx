"use client";
import "tailwindcss/tailwind.css";

import "@/styles/global.css";
import "@/styles/mobile.css";
import Asidebar from "@/components/desktop/sidebar/Asidebar";
import Glass from "@/components/desktop/login/Glass";

import { NavbarWrapper } from "@/components/mobile/nav/NavbarWrapper";
import Footer from "@/components/mobile/footer/Footer";
import { Provider } from "react-redux";

import React, { useEffect } from "react";
import Logobar from "@/components/mobile/nav/Logobar";
import BackNext from "@/components/desktop/nav/BackNext";
import { store } from "../../../redux/store";
import SidebarProvider from "../../../context/SidebarContext";
import { Providers } from "../desktop/providers";
import Mobile from "./page";
import { useRouter } from 'next/navigation'


export default function MobileRootLayout({
  children
}: {
  children: React.ReactNode;
}) {
console.log(" --- " , children)
  return (
  <section>
        <SidebarProvider>
        <Providers>
          <Provider store={store}>
            <div className="layout">
              {/* <div className="flex hederbar items-center">
                <div className="flex-auto">
                  <NavbarWrapper />
                </div>
              </div> */}
              <Glass className="w-full mx-auto">
                <div className="p-0">
                    <div className="drop-shadow-xl">
                  <div className="mb-4 pb-24 min-h-screen">
                    <main className="layout__main-content" >{children}</main>
                    </div>
                  </div>
                </div>
              </Glass>

            </div>
            <Footer />

            
          </Provider>
        </Providers> 
        </SidebarProvider>
    </section>
  );
}
