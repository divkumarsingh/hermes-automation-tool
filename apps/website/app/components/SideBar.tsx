"use client"

import { useRouter } from "next/navigation";
import { SideBarCards } from "./sideBarCard";
import { DashboardIcon } from "./icons/DashboardIcon";
import { CanvasIcon } from "./icons/CanvasIcon";

export const SideBar = () => {
    const router = useRouter()
    return(
        <div className=" container flex flex-col my-0.5 gap-2 shadow max-w-2xs p-2 font-500 min-h-screen text-gray-500 font-400 text-lg">
            <div> Hermes Automation </div> 
            <SideBarCards className = "text-white mb-2.5 bg-red-600 text-center" text = "New Workflow" onclick={() => {router.push("/create")}}/>
            <SideBarCards text = "Dashboard" icon = {<DashboardIcon className="w-5 h-5 text-gray-500 hover:text-white"/>} onclick={() => {router.push("/dashboard")}}/>
            <SideBarCards text = "Canvas" icon={<CanvasIcon className="w-5 h-5 text-gray-500 hover:text-white"/>}onclick={() => {router.push("/canvas")}}/>
            <SideBarCards text = "Workflows" onclick={() => {router.push("/dashboard")}}/>
            <SideBarCards text = "Logs" onclick={() => {router.push("/dashboard")}}/>
            <SideBarCards text = "Settings" onclick={() => {router.push("/dashboard")}}/>
        </div>
    )
}