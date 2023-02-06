import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import { EpicScreen } from 'screens/epic'
import { KanbanScreen } from 'screens/kanban'

export const ProjectScreens = () => {
    return <div>
        <h1>ProjectScreens</h1>
    <Link to={"kanban"}>看板</Link>
    <Link to={"epic"}>任务组</Link>
    <Routes>
         <Route path={"kanban"} element={<KanbanScreen />} />
         <Route path={"epic"} element={<EpicScreen />} />
         <Route path={"*"} element={<Navigate to={window.location.pathname + "/kanban"}/>} />
         {/* 如果前两个路由都匹配不到，就匹配第三个路由。同时也是首次进入到ProjectScreens展示的路由          */}
   </Routes>
    </div>
}
