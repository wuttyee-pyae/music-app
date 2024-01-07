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
  
  const formData = new FormData()
  // const requestData = {
  //   audioFile : data.musicFile,
  //   title: data.title,
  //   lyricsFile: data.lyricFile,
  //   genreId: data.genre,
  //   duration: data.duration,
  //   releasedYear: data.releaseDate
  // }
  formData.append("audioFile" ,data.music )
  formData.append("title" , data.title)
  formData.append("lyricsFile" ,data.lyric )
  formData.append("genreId" , data.genre)
  formData.append("duration" ,data.duration )
  formData.append("releasedYear" , data.releaseDate)
  console.log("req data -- " , formData)
  const result = await post('/songs' , formData , true).then( (res : any) => {
    return  res
  })
  return result.data
}


export const base64ToFormData = async (base64: any , fileName? : string) =>{
  // console.log("base64 file -- " , dataURI)
  // const file = await DataURIToBlob(dataURI)
  // console.log("after decode -- " , file)
  // const formData = new FormData();
  // await formData.append("file", file ,fileName || "" );
  // console.log("in service form data -- " , formData)
  // return formData

//   fetch(base64)
// .then(res => res.blob())
// .then(async blob => {
//   console.log("blob --- " , blob)
  const fd = new FormData();
  // const file = new File([blob], fileName || "filename");
  await fd.append('file', base64 , fileName )
  console.log(" file -- " , fd)
  return fd
// })
}


const DataURIToBlob = (dataURI: string) => {
  // const splitDataURI = dataURI.split(',')
  // const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
  // const mimeString = splitDataURI[0].split(':')[1].split(';')[0]
  // const ia = new Uint8Array(byteString.length)
  // for (let i = 0; i < byteString.length; i++)
  //     ia[i] = byteString.charCodeAt(i)
  // return new Blob([ia], { type: mimeString })

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