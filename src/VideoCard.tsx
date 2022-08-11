import { FC, memo, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {video, videoDetail} from '../modeles/video'
import EditPost from "./EditPost";
import { videoEditAction } from "./pureTS/action/video";
import VideoController from "./VideoController";
type VideoPlayerProps = {
  video:video

  onDelete:()=>void
};

const VideoPlayer: FC<VideoPlayerProps> = ({video, onDelete}) => {
  
  const [toggleEdit,setToggleEdit]=useState(false)
  const {title, url,id}=video
  const videoElement=useRef(null)
  const navigate=useNavigate()
  const handleClick=()=>navigate({
    pathname:'/'+id+'/video'
  })
  
   
return (
    <div className="w-64 h-72 p-4 space-y-2 rounded-md shadow-md container">
    <VideoController onDelete={onDelete} onEdit={()=>{setToggleEdit(!toggleEdit)}}/>
    <video onClick={handleClick}
    className="object-cover h-44 w-full shadow-md"
    ref={videoElement}
    src={url}
 />
 <h2 className="font-bold txt-2xl ">{title}</h2>
 {toggleEdit && <div className="fixed inset-0 bg-yellow-500 p-44">
    <EditPost 
    
    video={video} 
    editId={video.id}
     cancelClick={()=>{setToggleEdit(!toggleEdit)}}/>
    </div>}
 </div>
);
};

VideoPlayer.defaultProps = {};


export default (memo(VideoPlayer));

