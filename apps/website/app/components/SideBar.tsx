"use client"

import { useRouter } from "next/navigation";
import { SideBarCards } from "./sideBarCard";
import { DashboardIcon } from "./icons/DashboardIcon";
import { CanvasIcon } from "./icons/CanvasIcon";
import { WorkflowIcons } from "./icons/WorkflowsIcon";
import { LogsIcon } from "./icons/LogsIcon";
import { SettingsIcon } from "./icons/settingIcon";

export const SideBar = () => {
    const router = useRouter()
    return(
        <div className=" container flex flex-col my-0.5 gap-2 shadow max-w-2xs p-2 font-500 min-h-screen text-gray-500 font-400 text-lg">
            <div className="my-6"> Hermes Automation </div> 
            <SideBarCards className = "text-white mb-2.5 bg-red-600 text-center" text = "New Workflow" onclick={() => {router.push("/create")}}/>
            <SideBarCards text = "Dashboard" icon = {<DashboardIcon className="w-5 h-5 text-gray-500 hover:text-white"/>} onclick={() => {router.push("/dashboard")}}/>
            <SideBarCards text = "Canvas" icon={<CanvasIcon className="w-5 h-5 text-gray-500 hover:text-white hover:bg-white" />}onclick={() => {router.push("/canvas")}}/>
            <SideBarCards text = "Workflows" icon= {<WorkflowIcons className="w-5 h-5 text-gray-500 hover:text-white"/>} onclick={() => {router.push("/workflows")}}/>
            <SideBarCards text = "Logs" icon={<LogsIcon className="w-5 h-5 text-gray-500 hover:text-white" />} onclick={() => {router.push("/logs")}}/>
            <SideBarCards text = "Settings" icon={<SettingsIcon className="w-5 h-5 text-gray-500 hover:text-white" />} onclick={() => {router.push("/setting")}}/>
        </div>
    )
}