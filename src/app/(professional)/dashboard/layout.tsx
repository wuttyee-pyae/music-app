"use client";
import React from "react";
import "@/styles/mobile.css";
import "@/styles/dashboard.css";
import Footer from "@/components/mobile/footer/Footer";
import ProtectedRoutes from "@/components/common/ProtectedRoute";
import { Provider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";
import { store } from "../../../../redux/store";
import { Providers } from "../../providers";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <>
      <PrimeReactProvider>
        <Providers>
          <Provider store={store}>
          
              <main className="layout__main-content overscroll-y-none">
              {/* <ProtectedRoutes > */}
                {/* <div className="p-0">
                  <div className="drop-shadow-xl">
                    <div> */}
                      <div className="wapper mx-4 min-h-screen">
                     
                        {children}
                      
                      </div>
                    {/* </div>
                  </div>
                </div> */}
                {/* </ProtectedRoutes> */}
              </main>
              
          </Provider>
        </Providers>
      </PrimeReactProvider>
      </>
  );
};

export default Dashboard;
