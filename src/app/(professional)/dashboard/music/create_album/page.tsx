import React from "react";
import { Image, Input, Textarea } from "@nextui-org/react";
import MyButton from "@/components/desktop/login/MyButton";
import CardMusicList from "@/components/dashboard/music/CardMusicList";
import AddCoverImg from "@/components/dashboard/music/AddCoverImg";

const Albums = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-6 w-full gap-4 p-4">
        <div className="flex justify-start text-red-600">Cancel</div>
        <div className="flex justify-center items-center col-span-4 text-white">
          Create Album{" "}
        </div>
        <div className="flex justify-end text-white">Done</div>
      </div>
      <div className="w-ful p-4">
        <div className="flex justify-center p-4">
          <div className="w-full">
            <form className="flex flex-col gap-4 h-auto">
              <div className="flex justify-center">
                {/* <Image
                  width={300}
                  height={300}
                  alt="NextUI hero Image"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                /> */}
                <AddCoverImg width={300}
                  height={300} />
              </div>

              <Input
                isRequired
                label="Album Name"
                type="text"
                variant={"bordered"}
              />

              <Textarea
                label="Description"
                type="text"
                variant={"bordered"}
                labelPlacement="outside"
                placeholder="Enter your description"
              />

              

            </form>
          </div>
          
        </div>
      </div>

      <div className="grid grid-cols-1">
      <div className="mb-4">
                <MyButton >Add Tack</MyButton>
              </div>
                <CardMusicList />
                <CardMusicList />
                <CardMusicList />
              </div>

    </div>
  );
};

export default Albums;
