import React from "react";
import { Chip, Input } from "@nextui-org/react";
import AddCoverImg from "./AddCoverImg";
import Gender from "@/components/desktop/music/genre/Genre";
import { PlusIcon } from "@/components/desktop/artist/PlusIcon";

const ReleaseInfo = ({formData} : {formData : any}) => {
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
    setLyric(event.target.files[0].name)
    formData.lyricName = event.target.files[0].name
    if (event.target.files.length !== 0) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        formData.lyric = e.target.result
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
              variant="bordered"
              placeholder="Music Name"
              className="mb-8"
              defaultValue={formData.title}
              onChange={(e: any) => formData.title = e.target.value}
            />
          </div>
          <div>
            <AddCoverImg setData={(val: any)=>{formData.image = val.image ; formData.imageName = val.imageName } }/>
          </div>
          <div>
            <Input type="text" 
            variant={"bordered"} 
            placeholder="Add other Artist"
            endContent={<PlusIcon className="text-white" /> }
            defaultValue={formData.artistName}
            onChange={(e: any) => formData.artistName = e.target.value}
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
            <Gender setData={(val: any)=>formData.genre = val }/>
          </div>
          <div>
            <Input type="text" 
            variant={"bordered"} 
            label="Release Date" 
            defaultValue={formData.releaseDate}
            onChange={(e: any) => formData.releaseDate = e.target.value}/>
          </div>
          <div>
            <Input type="text" 
            variant={"bordered"} 
            label="Duration" 
            defaultValue={formData.duration}
            onChange={(e: any) => formData.duration = e.target.value}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseInfo;
