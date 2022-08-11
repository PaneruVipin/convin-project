import { State } from "../store";

export const videosSelector=(s:State)=>Object.keys(s.videos).map((id)=>s.videos[id as any])
export const bucketsSelector=(s:State)=>s.buckets
export const deletAttemptSelector=(s:State)=>s.deletAttempt
export const addAttemptSelector=(s:State)=>s.addAttempt
export const videosStateSelector=(s:State)=>s.videos
export const editAttemptSelector=(s:State)=>s.editAttempt
export const historySelector=(s:State)=>Object.keys(s.history).map((id)=>s.history[id as any])
export const historyDelete=(s:State)=>s.deletHistoryAttempt
export const historyAdd=(s:State)=>s.addHistoryAttempt