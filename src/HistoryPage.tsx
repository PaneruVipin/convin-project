import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { history } from "../modeles/video";
import HistoryRow from "./HistoryRow";
import { historyDeleteAction, historyFetch } from "./pureTS/action/video";
import { historyAdd, historyDelete, historySelector } from "./pureTS/selector/video";
import { State } from "./pureTS/store";

type HistoryPageProps = {
    historyList:history[],
    onDelete:(id:number)=>void
    historyFetch:()=>void
    deleteAttempt:number
    addAttempt:number
};

const HistoryPage: FC<HistoryPageProps> = ({historyList,onDelete,historyFetch,deleteAttempt,addAttempt}) => {
  useEffect(()=>{
    historyFetch()
  },[deleteAttempt,addAttempt])
  return <div className="py-28 px-20 min-h-screen">
     {historyList.map((h)=><HistoryRow key={h.id} onDelete={()=>{onDelete(h.id)}} history={h}/>)}
  </div>
};

HistoryPage.defaultProps = {};
const mapStateToProps=(s:State)=>{
    return {
        historyList:historySelector(s),
        addAttempt:historyAdd(s),
        deleteAttempt:historyDelete(s)
    }
}
const mapDispatchToProps={
    onDelete:historyDeleteAction,
    historyFetch:historyFetch
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(HistoryPage));