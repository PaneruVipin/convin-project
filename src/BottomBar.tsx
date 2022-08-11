import { FC, memo } from "react";
import Button from "./Button";
import { GrAdd } from 'react-icons/gr';
import { Link } from "react-router-dom";
type BottomBarProps = {
    createPost:()=>void
};

const BottomBar: FC<BottomBarProps> = ({createPost,...props}) => {
  return <div className="flex bg-red-200 py-2 justify-between  pr-6 items-center rounded-md shadow-md">
    <Link className="font-bold text-xl" to='/home'>Home</Link>
    <GrAdd onClick={createPost} className="bg-indigo-500 w-12 h-12 p-1 rounded-full" title="add video" />
    <Link className="font-bold text-xl" to='/history'>History</Link>
  </div>
};

BottomBar.defaultProps = {};

export default memo(BottomBar);