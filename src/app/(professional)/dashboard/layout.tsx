"use client";
import React from "react";
import SidebarProvider from "../../../../context/SidebarContext";
import { Providers } from "../../providers";
import { store } from "../../../../redux/store";
import Glass from "@/components/desktop/login/Glass";
import { NavbarWrapper } from "@/components/dashboard/nav/NavbarWrapper";
import { Provider } from "react-redux";
import "@/styles/mobile.css";
import "@/styles/dashboard.css";
import Footer from "@/components/mobile/footer/Footer";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
                      {/* <ProtectedRoutes > */}
                      <main className="layout__main-content">
                          <div className="mb-4 wapper mx-4 pb-4">
                            {children}
                          </div>
                      </main>
                      {/* </ProtectedRoutes> */}
                    </div>
                  </div>
                </div>
              </Glass>
            </div>
          </Provider>
        </Providers>
      </SidebarProvider>
    </>
  );
};

export default Dashboard;
