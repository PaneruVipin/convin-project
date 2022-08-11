import { history, historyDetail, video, videoDetail } from "../../../modeles/video"

export const VIDEO_ADD='VIDEO_ADD'
export const VIDEO_ADDED='VIDEO_ADDED'
export const VIDEO_DELETE='VIDEO_DELETE'
export const VIDEO_DELETED='VIDEO_DELETED'
export const VIDEO_EDIT='VIDEO_EDIT'
export const VIDEO_EDITED='VIDEO_EDITED'
export const VIDEOS_FECH='VIDEOS_FECH'
export const VIDEOS_FECHED='VIDEOS_FECHED'
export const VIDEO_FECH='VIDEO_FECH'
export const VIDEO_FECHED='VIDEO_FECHED'
export const HISTORY_FETCH='HISTORY_FETCH'
export const HISTORY_FETCHD='HISTORY_FETCHD'
export const HISTORY_ADD='HISTORY_ADD'
export const HISTORY_ADDED='HISTORY_ADDED'
export const HISTORY_DELETE='HISTORY_DELETE'
export const HISTORY_DELETED='HISTORY_DELETED'

export const videoAddAction = (video:videoDetail)=>{
return {type:VIDEO_ADD, payload:video}
}
export const videoAddedAction = ()=>{
  return {type:VIDEO_ADDED }
}
export const videoDeleteAction = (id:number)=>{
    return {type:VIDEO_DELETE, payload:id}
}
export const videoDeletedAction = ()=>{
  return {type:VIDEO_DELETED}
}

 export const videoEditAction = (video:videoDetail, id:number)=>{
  return {type:VIDEO_EDIT, payload:{id:id,label:video.label,title:video.title,url:video.url}}
  }

  export const videoEditedAction = ()=>{
    return {type:VIDEO_EDITED }
    }


export const videosFetch=()=>{
return {type:VIDEOS_FECH}
}
export const videosFetched=(videos:video[])=>{
  return {type:VIDEOS_FECHED, payload:videos}
  }

  export const videoFetch=(id:number)=>{
    return {type:VIDEO_FECH, payload:id}
    }
    export const videoFetched=(video:video)=>{
      return {type:VIDEO_FECHED, payload:video}
      }

      export const historyFetch=()=>{
        return {type:HISTORY_FETCH}
        }
        export const historyFetched=(historyList:history[])=>{
          return {type:HISTORY_FETCHD, payload:historyList}
          }
          
      export const historyAddAction = (history:historyDetail)=>{
            return {type:HISTORY_ADD, payload:history}
            }
            export const historyAddedAction = ()=>{
              return {type:HISTORY_ADDED }
            }
            export const historyDeleteAction = (id:number)=>{
                return {type:HISTORY_DELETE, payload:id}
            }
            export const historyDeletedAction = ()=>{
              return {type:HISTORY_DELETED}
            }