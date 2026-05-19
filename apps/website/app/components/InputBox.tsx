"use client"

import { stringify } from "querystring"
interface InputBoxProps{
    placeholder: string,
    onChange?: (e: any) => void;
    type?: "text" | "password"
}


export const InputBox = ({ placeholder="", onChange, type="text"}: InputBoxProps) => {
    return(
        <input 
        className="border rounded px-4 py-2 w-full border-black"
        type ={type} placeholder={placeholder} onChange={onChange}></input>
    )

}