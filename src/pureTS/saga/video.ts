import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { history, video } from "../../../modeles/video";
import { historyAddedAction, historyDeletedAction, historyFetched, videoAddedAction, videoDeletedAction, videoEditedAction, videoFetched, videosFetched } from "../action/video";
import { addHistory, addVideo, deleteHistory, deleteVideo, editVideo, getHistory, getVideo, getVideos } from "../apis/video";


export function* getVideosSaga(action:AnyAction):Generator{
 const data = yield call(getVideos)
  yield put(videosFetched(data as video[]))
  }

export function* deleteVideoSaga(action:AnyAction):Generator{
   yield call(deleteVideo, action.payload)
   yield put (videoDeletedAction())
}
export function* addVideoSaga(action:AnyAction):Generator{
  
yield call(addVideo, action.payload)
yield put (videoAddedAction())
}

export function* getVideoSaga(action:AnyAction):Generator{
  
 const data=  yield call(getVideo, action.payload)
   yield put (videoFetched(data as video))
   }
   export function* editVideoSaga(action:AnyAction):Generator{
  const data= yield call(editVideo, action.payload,action.payload.id)
  console.log('called',data)
      yield put (videoEditedAction())
      }

      export function* getHistorySaga(action:AnyAction):Generator{
        const data = yield call(getHistory)
         yield put(historyFetched(data as history[]))
         }
       
       export function* deleteHistorySaga(action:AnyAction):Generator{
          yield call(deleteHistory, action.payload)
          yield put (historyDeletedAction())
       }
       export function* addHistorySaga(action:AnyAction):Generator{
         
       yield call(addHistory, action.payload)
       yield put (historyAddedAction())
       }