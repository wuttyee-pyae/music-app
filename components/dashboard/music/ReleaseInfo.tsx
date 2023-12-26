import React from "react";
import { Chip, Input } from "@nextui-org/react";
import AddCoverImg from "./AddCoverImg";
import Gender from "@/components/desktop/music/genre/Genre";

const ReleaseInfo = () => {
  const initialArtists = ["Artist Name", "Banana", "Cherry"];

  const [artists, setAritsts] = React.useState(initialArtists);

  const handleClose = (artistToRemove: string) => {
    setAritsts(artists.filter((artist) => artist !== artistToRemove));
    if (artists.length === 1) {
      setAritsts(initialArtists);
    }
  };

  return (
    <div className="my-8">
      <div className="w-full justify-center max-w-md mx-auto my-0">
        <div className="flex flex-col gap-4 justify-center">
          <div>
            <Input
              type="text"
              variant={"bordered"}
              label="Music Name"
              className="mb-8"
            />
          </div>
          <div>
            <AddCoverImg />
          </div>
          <div>
            <Input type="text" variant={"bordered"} label="Add Artist" />

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
