"use client";
import ButtonTag from "./ButtonTag";

export default function CrbtTag() {
  const handleOnCrbtTagClick = () => {
    console.log("hi this is crbt tag item");
  };

  return (
    <div className="mx-4 mb-4">
        <div className="flex">
          <ButtonTag
            buttonText="Top Ten"
            handleOnClick={handleOnCrbtTagClick}
          />
          
      </div>
    </div>
  );
}
