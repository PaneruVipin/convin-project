import { FC, memo, useState } from "react";
import VideoCard from "./VideoCard";
import { MdDelete } from 'react-icons/md';
import { video, videoDetail } from "../modeles/video";
import { videoDeleteAction } from "./pureTS/action/video";
import { connect } from "react-redux";
import _default from "react-redux/es/components/connect";
import EditPost from "./EditPost";

type BucketProps = {
    videos:video[],
    label:string
    handleDelete:(id:number)=>void
};

const Bucket: FC<BucketProps> = ({videos,label,handleDelete}) => {
const handleClick=()=>{
  const ids=videos.map((v)=>v.id)
  const deleteVideos=ids.map((id)=>handleDelete(id))
}
  return <div className="bg-green-200 space-y-2">
    <div className="flex justify-between px-6 py-2">
        <h1 className="font-bold text-4xl ">{label}</h1>
    <MdDelete onClick={handleClick} title="delete all" className="bg-indigo-500 w-8 h-8 p-1 rounded-full" />
    </div>
  <div className="rounded-md shadow-md py-4  flex flex-wrap gap-x-8 justify-between px-6">
   {
    videos.map((v)=><VideoCard onDelete={()=>{handleDelete(v.id)}}  key={v.id} video={v}/>)
   }
  
<span className="w-64"/>
<span className="w-64"/>
  </div>
  </div>
};

Bucket.defaultProps = {};
const mapDispatchToProps={
  handleDelete:videoDeleteAction
}

export default connect(undefined ,mapDispatchToProps)(memo(Bucket));