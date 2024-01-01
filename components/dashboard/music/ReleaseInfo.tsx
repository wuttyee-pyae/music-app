import React from "react";
import { Chip, Input } from "@nextui-org/react";
import AddCoverImg from "./AddCoverImg";
import Gender from "@/components/desktop/music/genre/Genre";
import { PlusIcon } from "@/components/desktop/artist/PlusIcon";

const ReleaseInfo = () => {
  const initialArtists = ["Artist Name", "Banana", "Cherry"];

  const [artists, setAritsts] = React.useState(initialArtists);
  const [lyric, setLyric] = React.useState();

  const handleClose = (artistToRemove: string) => {
    setAritsts(artists.filter((artist) => artist !== artistToRemove));
    if (artists.length === 1) {
      setAritsts(initialArtists);
    }
  };

  const onUploadChange = (event: any) => {
    console.log("file - " , event)
    setLyric(event.target.files[0].name)
    if (event.target.files.length !== 0) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // console.log(e.target.result);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <div className="my-8">
      <div className="w-full justify-center max-w-md mx-auto my-0">
        <div className="flex flex-col gap-4 justify-center">
          <div>
            <Input
              type="text"
              variant={"bordered"}
              // label="Music Name"
              placeholder="Music Name"
              className="mb-8"
            />
          </div>
          <div>
            <AddCoverImg />
          </div>
          <div>
            <Input type="text" variant={"bordered"} placeholder="Add Artist"
              endContent={<PlusIcon className="text-white" /> }
            />

            <div className="flex gap-2 mt-2">
              {artists.map((artist, index) => (
                <Chip
                  key={index}
                  onClose={() => handleClose(artist)}
                  variant="flat"
                >
                  {artist}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <Input type="text" variant={"bordered"} placeholder="Add Lyric" value={lyric}
              endContent={
                <div>
                  <label htmlFor="file-input-lyric">
                    <PlusIcon className="text-white" />
                  </label>
                  <input id="file-input-lyric" type="file" accept="*" onChange={onUploadChange} className="hidden" />
                </div>
              }
            />
          </div>
          <div>
            <Gender />
          </div>
          <div>
            <Input type="text" variant={"bordered"} label="Relese Date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseInfo;
