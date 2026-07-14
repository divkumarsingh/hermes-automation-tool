"use client"

import { stringify } from "querystring"
interface InputBoxProps{
    placeholder: string,
    onChange?: (e: any) => void;
    type?: "text" | "password"
    className? : string
}

const defaultStyles = "border rounded px-4 py-2 w-full border-black"

export const InputBox = ({ placeholder="", onChange, type="text", className}: InputBoxProps) => {
    return(
        <input 
        className={`${defaultStyles}
        ${className}`}
        type ={type} placeholder={placeholder} onChange={onChange}></input>
    )

}