"use client"

import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"


export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div>
            <AppBar/>
                        <div className="flex flex-row align-middle items-center justify-center my-30 mx-20 gap-8">
                            <div className="gap-4">
                                 <p className="text-4xl font-bold py-2"> WELCOME BACK &#128516;</p>
                                <p className="text-4xl font-semibold">Workflow Integration starts and scales with <span className=" text-primary-color">__H</span>ermes.</p>
                                <p className="text-2xl py-4 px-2">Orchestrate Integrations across your teams, tools, and processes. Turn Ideas into automated action today and build your tommorrow.</p>
                                <div className="px-2">
                                    <p className="py-2 text-xl"> <span className=" text-primary-color">&#10004; </span>Integrate various apps without code.</p>
                                    <p className="py-2 text-xl"> <span className=" text-primary-color">&#10004; </span>Build Powerful workflow in minutes, not in week.</p>
                                    <p className="py-2 text-xl"> <span className=" text-primary-color">&#10004;</span>14-day trial of all premium features and apps.</p>
                                </div>
                            </div>
                            <div className=" container flex flex-col shadow-xl shadow-white px-6 py-8 gap-4 ">
                                <Button variant="secondary" text="Log in with Google" className="border font-bold"/>
                                <p className="font-semibold mt-4">Work Email <span>&#8727;</span> </p>
                                <InputBox type="text" placeholder="" onChange={e => {
                                    setEmail(e.target.value)
                                }}/>
                                <div>
                                    <p className="font-semibold mt-4">Password  <span>&#8727;</span></p>
                                    <InputBox type="password" placeholder="" onChange={e => {
                                        setPassword(e.target.value)
                                    }}/>                        
                                </div>
                                <Button variant="primary" text="Log in " className="rounded" />
                            </div>
                        </div>
                    </div>


    )
}