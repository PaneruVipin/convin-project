import { Route, Routes } from "react-router-dom";
import HistoryPage from "./HistoryPage";
import HomePage from "./HomePage";
import MainLayout from "./MainLayout";
import Player from "./Player";

function Path(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
           <Route path='home' element={<HomePage/>}/>
           <Route path='history' element={<HistoryPage/>}/> 
        </Route>
        <Route path={':id/video'} element={<Player/>}/>
    </Routes>
    </div>
  );
}
export default Path;