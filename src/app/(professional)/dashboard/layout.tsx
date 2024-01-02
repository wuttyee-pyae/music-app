"use client";
import React from "react";
import "@/styles/mobile.css";
import "@/styles/dashboard.css";
import Footer from "@/components/mobile/footer/Footer";
import ProtectedRoutes from "@/components/common/ProtectedRoute";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      
                <div className="p-0">
                  <div className="drop-shadow-xl">
                    <div>
                      <ProtectedRoutes >
                      <main className="layout__main-content overscroll-y-none">
                          <div className="wapper mx-4 min-h-screen">
                            {children}
                          </div>
                      </main>
                      </ProtectedRoutes>
                    </div>
                  </div>
                </div>
    </>
  );
};

export default Dashboard;
