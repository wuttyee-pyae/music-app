import React from "react";
import Musicitems from './musicitems';

export default function Musiclist() {
  return (
    <div className="mx-4 overflow-auto">
        <Musicitems />  
        <Musicitems />  
        <Musicitems />  
        <Musicitems />  
        <Musicitems />  
    </div>
  );
}