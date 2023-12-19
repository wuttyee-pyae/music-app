
import React from "react";

// import CrbtPlayer from "@/components/crbtplayer/CrbtPlayer"
import MusicPlayer from "@/components/desktop/musicplayer/MusicPlayer"

export default function Footer() {
  const [isExpand,setIsExpand] = React.useState(false)

  const doExpend = () =>{
    setIsExpand(!isExpand)
  }
  return (
    <div className="">
      <footer className={`footer-container fixed-bottom border-gradient border-gradient-purple only-top ${isExpand ? 'top-0' : ''} `}>
        {/* <CrbtPlayer /> */}
        <MusicPlayer doExpend={doExpend} isExpand={isExpand} />
      </footer>
    </div>
  );
}
