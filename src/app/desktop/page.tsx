import PopularMusic from "@/components/atrist/PopularMusic";
import CadPlayList from "@/components/yoursplaylist/CadPlayList";
import { Link } from "@nextui-org/react";
import ContactUs from "./contactus/page";
export default function Desktop(){
    return (
        <div className="drop-shadow-xl">
       <div className="">
     <div className="pt-6">
           <div className="mb-4 wapper mx-4">
            <Link
               href="/"
               color="foreground"
               className="text-xl hover:font-bold hover:underline mb-6"
             >
               Yours PlayList
             </Link>
             <div className="grid grid-cols-3 gap-4 xl:grid-cols-6 md:grid-cols-5">
               <CadPlayList />
               <CadPlayList />
               <CadPlayList />
               <CadPlayList />
               <CadPlayList />
               <CadPlayList />
               <ContactUs/>
             </div>
           </div>
         </div>

       </div>
     </div>
    )
}