"use client" 
import React from 'react'
import SidebarProvider from '../../../../context/SidebarContext'
import { Providers } from '../../providers'
import { store } from '../../../../redux/store'
import Glass from '@/components/desktop/login/Glass'
import { NavbarWrapper } from '@/components/mobile/nav/NavbarWrapper'
import { Provider } from "react-redux";
import "@/styles/mobile.css";
import "@/styles/dashboard.css";
import Footer from '@/components/mobile/footer/Footer'
import ProtectedRoutes from '@/components/common/ProtectedRoute'

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <SidebarProvider>
            <Providers>
              <Provider store={store}>
                <div className="layout">
                  <div className="flex hederbar items-center">
                <div className="flex-auto">
                  <NavbarWrapper />
                </div>
              </div>
                  <Glass className="w-full mx-auto">
                    <div className="p-0">
                      <div className="drop-shadow-xl">
                        <div className="mb-4 pb-24 min-h-screen">
                          <ProtectedRoutes >
                          <main className="layout__main-content container" >{children}</main>
                          </ProtectedRoutes>
                        </div>
                      </div>
                    </div>
                  </Glass>
                </div>
                <Footer />

              </Provider>
            </Providers>
          </SidebarProvider>
    </>
  )
}

export default Dashboard