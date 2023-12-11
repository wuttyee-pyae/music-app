import React from "react";
import {Card, CardBody} from "@nextui-org/react";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";

export default function CardBox({data , status , icon} : {data : any , status: string , icon?: React.ComponentType<any> }) {
  return (
        <Card className="p-2 w-full">
            <CardBody className="text-center justify-center">
              {
               status == "time" ? 
               <div>
                  <p className="music_type">{data.title}</p>
                <p className={`text-2xl text-bold ${data.color}`} >{data.count || 0}</p>
               </div>
               : 
               <div>
                <p className={`text-2xl text-bold ${data.color}`} >{data.count || 0}</p>
                <div className="flex justify-center items-center"><icon /></div>
                <p className="text-white">{data.title}</p>
               </div>
              }
              
                
            </CardBody>
            </Card>
  );
}

