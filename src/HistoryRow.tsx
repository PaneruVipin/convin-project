import { FC, memo } from "react";
import { MdDelete } from "react-icons/md";
import { history } from "../modeles/video";

type HistoryRowProps = {
    history:history
    onDelete:()=>void
};

const HistoryRow: FC<HistoryRowProps> = ({history,onDelete}) => {
  return <div className="bg-gray-300 rouneded-md shadow-md flex justify-between px-10 py-4">
    <h2>{history.title}</h2>
    <MdDelete onClick={onDelete} title="delete" className="bg-indigo-500 w-8 h-8 p-1 rounded-full" />
  </div>
};

HistoryRow.defaultProps = {};

export default memo(HistoryRow);