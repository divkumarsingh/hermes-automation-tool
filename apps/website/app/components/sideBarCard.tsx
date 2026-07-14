import { ReactElement } from "react";

interface SideBarCards {
    text: string,
    icon?: ReactElement,
    onclick: () => void,
    className?: string
}

const defaultStyles = "container p-2 rounded-md hover:bg-primary-color cursor-pointer hover:text-white"
export const SideBarCards = ({text, icon, onclick, className} : SideBarCards) => {
    return(
        <div 
        className= {`${defaultStyles} ${className}`}
        onClick={onclick}>
        <div className="flex items-center gap-1">{icon} {text}</div></div>
    )
}