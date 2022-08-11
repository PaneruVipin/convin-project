import { FC, memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bucket, video } from "../modeles/video";
import Bucket from "./Bucket";
import { videosFetch } from "./pureTS/action/video";
import { addAttemptSelector, bucketsSelector, deletAttemptSelector, editAttemptSelector, videosSelector } from "./pureTS/selector/video";
import { State } from "./pureTS/store";

type HomePageProps = {
    videos:video[],
    buckets:bucket[],
    fetchVideos:()=>void
    deletAttempt:number
    addAttempt:number
    editAttempt:number
};

const HomePage: FC<HomePageProps> = ({videos,buckets,fetchVideos,deletAttempt,addAttempt,editAttempt}) => {
    
  useEffect(()=>{
    console.log('useffect1')
    fetchVideos()
  },[deletAttempt,addAttempt,editAttempt])
    const cleanedVideos=(condition:string)=>{
     const filteredvideos=videos.filter((v)=>v.label===condition)
     return filteredvideos
    }
  return <div className="min-h-screen bg-gray-200 px-20 pt-32 pb-32 space-y-10">
 {
   buckets?.map((b)=><div>
    {cleanedVideos(b.label).length ?<Bucket  key={b.id} videos={cleanedVideos(b.label)} label={b.label}/>:<span/>}</div>)
 }
  </div>
};

HomePage.defaultProps = {};
const mapStateToProps=(s:State)=>{
return {
    videos:videosSelector(s),
    buckets:bucketsSelector(s),
    deletAttempt:deletAttemptSelector(s),
    addAttempt:addAttemptSelector(s),
    editAttempt:editAttemptSelector(s)
}
}

const mapDispatchToProps={
    fetchVideos:videosFetch
}

export default connect(mapStateToProps,mapDispatchToProps)(memo(HomePage));