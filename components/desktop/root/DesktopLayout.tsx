'use client'

import { Provider } from "react-redux"
import SidebarProvider from "../../../context/SidebarContext"
import { store } from "../../../redux/store"
import Logobar from "../sidebar/Logobar"
import BackNext from "../nav/BackNext"
import { NavbarWrapper } from "../nav/NavbarWrapper"
import Glass from "../login/Glass"
import Asidebar from "../sidebar/Asidebar"
import Footer from "../Footer"
import { Providers } from "../../../src/app/providers"
import { PrimeReactProvider } from 'primereact/api';
import { ConfirmDialog } from 'primereact/confirmdialog'; 

export default function DesktopLayout({children} : {children : React.ReactNode}){
    return (
        <>
        <SidebarProvider>
        <PrimeReactProvider>
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
                            <ConfirmDialog />
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
                </PrimeReactProvider>
              </SidebarProvider>
              </>
    )
}