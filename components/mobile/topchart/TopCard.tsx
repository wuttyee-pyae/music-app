import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

import "./topcard.css";



export default function TopCard() {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
      
      </CardBody>
      
      <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
        <div className="col-span-2">
          <div className="flex gap-4">
            <div>id</div>
            <div className="truncate break-words music_name">Music Name</div>
          </div>
        </div>
        <div className="truncate break-words music_type">
          Tomer Katz ft. VIGZ
        </div>
        
      </div>
      <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
        <div className="col-span-2">
          <div className="flex gap-4">
            <div>id</div>
            <div className="truncate break-words music_name">Music Name</div>
          </div>
        </div>
        <div className="truncate break-words music_type">
          Tomer Katz ft. VIGZ
        </div>
        
      </div>
      <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
        <div className="col-span-2">
          <div className="flex gap-4">
            <div>id</div>
            <div className="truncate break-words music_name">Music Name</div>
          </div>
        </div>
        <div className="truncate break-words music_type">
          Tomer Katz ft. VIGZ
        </div>
        
      </div>
    </Card>
  );
}
