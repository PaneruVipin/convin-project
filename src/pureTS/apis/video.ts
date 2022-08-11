import axios from "axios"
import { history, video } from "../../../modeles/video"
const BASE_API='http://localhost:3000/'
export  const getVideos= async() =>{
    const response= await axios.get<video[]>(BASE_API+'posts')
    return response.data
  }
  export  const getVideo= async(id:number) =>{
    const response= await axios.get<video>(BASE_API+'posts/'+id)
    return response.data
  }

export const addVideo =async(video:video)=>{
    const response= await axios.post<video>(BASE_API+'posts',
    video
    )
    return response.data
}

export const editVideo =async(video:video, id:number)=>{
    const response= await axios.patch<video>(BASE_API+'posts/'+id,
    video
    )
    return response.data
}

export const deleteVideo =async(id:number)=>{
    const response= await axios.delete(BASE_API+'posts/'+id)
   
}

export const getHistory =async()=>{
  const response= await axios.get<history[]>(BASE_API+'history')
  return response.data
}

export const addHistory=async(history:history)=>{
  const response= await axios.post<history>(BASE_API+'history',
    history
    )
    return response.data
}
export const deleteHistory=async(id:number)=>{
  const response= await axios.delete(BASE_API+'history/'+id)
}