import { get } from "./axios.api";


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