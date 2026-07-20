
import { DashboardIcon } from "../components/icons/DashboardIcon";
import { SideBar } from "../components/SideBar";
import { SignedAppBar } from "../components/SignedAppbar";
import { DashboardHeroCard } from "../components/cards/dashboardHeroCard";

export default function Home () {
    return(
        <div>
            <SignedAppBar/>
            <div className="flex flex-row " >
                <SideBar/>
                <div className="container flex flex-col gap-4 m-16 ">
                    <h1 className="font-semibold text-3xl"> Dashboard Overview</h1>
                    <div className="flex gap-4 py-4">
                        <DashboardHeroCard heading="TOTAL EXECUTION" data="1.65M" subdata="+12% this week"/>
                        <DashboardHeroCard heading="SUCCESS RATE" data="99.9%" subdata="System Healthy"/>
                        <DashboardHeroCard heading="ACTIVE HOOK" data="400" subdata="Across 12 Integration"/>
                    </div>
                    <div className="flex justify-around">
                        <div>
                            <p className="font-semibold text-2xl"> Your Workflows</p>
                            

                        </div>
                        <div>
                            <p className="font-semibold text-2xl"> Recent Activity </p>
                        </div>
                    </div>
                </div>
                </div>
        </div>

    )
}