import { useState } from "react"



export const  ToogleButton = () => {
    const [isYearly, setIsYearly] = useState(false);
    return (
        <div className="flex items-center gap-3">
                        <span className={`text-sm font-semibold transition-colors ${!isYearly ? "text-gray-900":"text-gray-500"}`} >Monthly</span>
                        <button 
                            type ="button" 
                            onClick={()=> setIsYearly(!isYearly)}
                            className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                            role="switch"
                            aria-checked={isYearly}
                            >
                            <span
                                aria-hidden="true"
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                isYearly ? "translate-x-7" : "translate-x-0"
                                }`}
                            /> 
                        </button>
                    /</div>

    )
}