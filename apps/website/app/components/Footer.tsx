import { Copyright } from "lucide-react"

export const Footer = () => {
    return(
        <div className="flex text-slate-500 bg-slate-400 text-lg text-center gap-8 items-center m-auto py-2 px-10">
            <div className="px-10">
                <p className="text-black text-xl items-center">Hermes Automation</p>
                <p className="flex items-center"> {<Copyright className="w-4 h-4"/>} 2026 Hermes Automation Inc.</p>
            </div>
            <div className="gap-8 flex justify-end">
                <div> Privacy Policy </div>
                <div> Terms of service </div>
                <div> Security </div>
                <div> Status </div>
            </div>
        </div>
    )
}