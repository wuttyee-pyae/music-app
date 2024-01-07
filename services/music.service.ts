import { get, post } from "./axios.api";


export const getAllGenres = async () => {
      const result = await get('/genres').then( (res : any) => {
        return  res
      })
      return result.data
  };

  export const getAllMoods = async () => {
    const result = await get('/moods').then( (res : any) => {
      return  res
    })
    return result.data
};


export const uploadMusicBySingle = async (data : any) => {
  console.log("req data -- " , data)
  const requestData = {
    audioFile : data.musicFile,
    title: data.title,
    lyricsFile: data.lyricFile,
    genreId: data.genre,
    duration: data.duration,
    releasedYear: data.releaseDate
  }
  const result = await post('/songs' , requestData , true).then( (res : any) => {
    return  res
  })
  return result.data
}


export const base64ToFormData = async (dataURI: string , fileName? : string) =>{
  const file = await DataURIToBlob(dataURI)
  const formData = new FormData();
  formData.append("file", file ,fileName || "" );
  return formData
}


const DataURIToBlob = (dataURI: string) => {
  const splitDataURI = dataURI.split(',')
  const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0]
  const ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i)
  return new Blob([ia], { type: mimeString })
}

export const getBase64 =  (file : any ,  callback: any) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async function () {
      await callback(reader.result)

  };
  reader.onerror = function (error) {
      console.log('Error: ', error);
  };
}