import { FC, memo, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { historyDetail, video } from "../modeles/video";
import { historyAddAction, videoFetch } from "./pureTS/action/video";
import { videosSelector, videosStateSelector } from "./pureTS/selector/video";
import { State } from "./pureTS/store";
import { withRouter, WithRouterProps } from "./WithRouter";

type PlayerProps = {
    video:video
    videoFetch:(id:number)=>void
    addHistory:(data:historyDetail)=>void
} & WithRouterProps
const Player: FC<PlayerProps> = ({video,videoFetch,params,addHistory}) => {
    const videoElement=useRef(null)
    
    useEffect(()=>{
        if(params.id){
        videoFetch(+params.id)
        }
        addHistory({title:video.title,url:video.url})
    },[])
  return <div  className="min-h-screen">
  { video && <iframe 
  allowFullScreen

    className="object-cover h-44  shadow-md"
    ref={videoElement}
    src={video.url}
 />}
  </div>
};

Player.defaultProps = {};
const mapStateToProps=(s:State,props:any)=>{
    return {
        video:videosStateSelector(s)[+props.params.id]
    }
}
const mapDispatchToProps={
   videoFetch:videoFetch,
   addHistory:historyAddAction
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(memo(Player)));