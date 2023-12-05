import { Provider } from "react-redux";
import SidebarProvider from "../../../context/SidebarContext";
import Glass from "@/components/desktop/login/Glass";
import { store } from "../../../redux/store";
import { Providers } from "../../../src/app/providers";
import Footer from "../footer/Footer";
export default function MobileLayout({children} : {children: React.ReactNode}){
    return(
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
                              <main className="layout__main-content" >{children}</main>
                              {/* <Desktop  >{children}</Desktop> */}
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


