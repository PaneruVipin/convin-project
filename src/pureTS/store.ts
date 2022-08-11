import { applyMiddleware, createStore, Reducer } from "redux"
import { bucket, history, video } from "../../modeles/video"
import { HISTORY_ADDED, HISTORY_DELETED, HISTORY_FETCHD, VIDEOS_FECHED, VIDEO_ADDED, VIDEO_DELETED, VIDEO_EDITED, VIDEO_FECHED } from "./action/video"
import video1 from './assets/ViD_01.mp4'
import { useArrayConverter } from "./hooks/array"
import { rootSaga, sagaMiddleware } from "./saga"

 
export type State={
   videos:{
    [id:number]:video
  },
  history:{
    [id:number]:history
  }
   buckets:bucket[],
   deletAttempt:number
   addAttempt:number
   editAttempt:number
   deletHistoryAttempt:number
   addHistoryAttempt:number
}

const initialState:State= {
  videos:{},
  history:{},
  buckets:[
    { id:1, label:'education'},
    { id:2, label:'entertainment'},
    { id:1, label:'gaming'}
  ],
  deletAttempt:1,
  addAttempt:1,
  editAttempt:1,
  deletHistoryAttempt:1,
  addHistoryAttempt:1,
  
}

export const reducer: Reducer<State> = (state=initialState, action) => {
switch(action.type){
   case VIDEOS_FECHED:{
    const videos=useArrayConverter(action.payload)
    return {...state, videos:videos}
   }
   case VIDEO_DELETED:{
    return {...state,deletAttempt:++state.deletAttempt}
   }
   case VIDEO_ADDED:{
    return {...state,addAttempt:++state.addAttempt}
   }
   case VIDEO_FECHED:{
    
    return {...state, videos:{...state.videos, [action.payload.id]:action.payload}}
   }
   case VIDEO_EDITED:{
    
    return {...state,editAttempt:++state.editAttempt }
   }
   case HISTORY_FETCHD:{
    const history=useArrayConverter(action.payload)
    return {...state, history:history }
   }
   case HISTORY_ADDED:{
    return {...state,addHistoryAttempt:++state.addHistoryAttempt}
   }
   case HISTORY_DELETED:{
    return {...state, deletHistoryAttempt:++state.deletHistoryAttempt}
   }
    default:{
        return {...state}
    }
}
}

export const store=createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)