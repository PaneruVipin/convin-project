import { FC, memo } from "react";
import { MdDelete,MdOutlineModeEditOutline } from 'react-icons/md';

type VideoControllerProps = {
    onEdit:()=>void
    onDelete:()=>void
};

const VideoController: FC<VideoControllerProps> = ({onDelete,onEdit}) => {
  return <div className="flex justify-end gap-x-4 ">
  <MdOutlineModeEditOutline onClick={onEdit} title="edit" className="bg-indigo-500 w-8 h-8 p-1 rounded-full"/>
<MdDelete onClick={onDelete} title="delete" className="bg-indigo-500 w-8 h-8 p-1 rounded-full" />
  </div>
};

VideoController.defaultProps = {};

export default memo(VideoController);