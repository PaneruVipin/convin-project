import { FC, memo, useState } from "react";
import { Outlet } from "react-router-dom";
import BottomBar from "./BottomBar";
import CreatePost from "./CreatePost";
import Header from "./Header";
import HomePage from "./HomePage";

type MainLayoutProps = {
    
};

const MainLayout: FC<MainLayoutProps> = ({...props}) => {
    const [togglePostPopup, setTogglePostPopup]=useState(false)
    const createPost=()=>{
        setTogglePostPopup(!togglePostPopup)
    }
  return <div>
    <div className="fixed inset-x-0 top-0">
        <Header/>
    </div>
    <Outlet/>
    {togglePostPopup && <div className="fixed inset-0 bg-yellow-500 p-44">
    <CreatePost cancelClick={()=>{setTogglePostPopup(!togglePostPopup)}}/>
    </div>}
    <div className="fixed inset-x-0 bottom-0 ">
        <BottomBar createPost={createPost}/>
    </div>
  </div>
};

MainLayout.defaultProps = {};

export default memo(MainLayout);