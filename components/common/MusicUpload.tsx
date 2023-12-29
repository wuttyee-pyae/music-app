"use client";
import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import ReleaseInfo from "../dashboard/music/ReleaseInfo";
import AddTrack from "../dashboard/music/AddTrack";


export default function MusicUpload({data} : {data : any}) {
  const [showInfo,setShowInfo] = useState(false)

  const handleInfo = (val: any) =>{
    setShowInfo(val)
  }

  return (
    <div>
      {
        data.map((value: any , index : number)=>{
          return(
            <Accordion defaultExpandedKeys={[String(index)]} key={index}>
            <AccordionItem
              key={index}
              aria-label="Track"
              subtitle={<span>Press to expand</span>}
              title={"Track  " +(index +1)}
              startContent={<MusicIcon className="text-secondary" />}
            >
              <div className="w-full justify-center mx-auto my-0">
                <AddTrack handleInfo={handleInfo}/>
                {/* {
                  showInfo ?  */}
                  <ReleaseInfo /> 
                   {/* : null
                 } */}
              </div>
          </AccordionItem>
        </Accordion>
          )
        })
      }
    </div>
  );
}
