"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./artistscover.module.css"

export default function Artistscover() {
  const [imagePath, setImagePath] = React.useState("https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg")
    if(imagePath == "" || imagePath == null){
      setImagePath("/images/non-cover-bg.jpg")
    }
  // useEffect
  return (
      <div>
        <div className={styles.cover_gradient}  style={{ backgroundImage: `url(${imagePath})` }}>
        </div>
      </div>
  );
}
