
import { SideBar } from "../components/SideBar";
import { SignedAppBar } from "../components/SignedAppbar";

export default function Home () {
    return(
        <div>
            <SignedAppBar/>

            <div className="flex flex-row" >
                    <SideBar/>
                </div>
                <div>

                </div>
            </div>

    )
}