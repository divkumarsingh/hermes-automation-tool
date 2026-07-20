"use client"

import { Button } from "./Button"
import  { useRouter } from "next/navigation"

export const Hero = () => {
    const router = useRouter();
    return(
        <div className=" container mx-auto flex flex-col my-4 py-20 px-8 items-center gap-4 align-middle">
            <div className="text-neutral-color text-l"> BUILD ASYNCHRONOUS WORKFLOW </div>
            <div className="text-5xl text-bold mb-4"> Your Tools, Your Product</div>
            <div className="flex flex-col gap-1">
                <p className="text-center">Hermes give you one place to set up your asynchronous workflow and see everything.</p>
                <p className="text-center">so you can focus on building the product only.</p>
                <p className="text-center ">Build anything, don't take permission, <span className="bg-primary-color my-2 py-2 px-3 rounded-l font-bold">have agency.</span></p>
            </div>
            <div className="contianer flex flex-row items-center justify-baseline py-8 px-8 gap-8 ">
                <Button variant="primary" text="Start free with email" className="rounded-md Px-4 py-2" onClick={() => router.push("/signup")}/>
                <Button variant ="secondary" text="Start With Google" className="rounded-md px-4 py-2 pointer" onClick={() => router.push("/signup")}/>
            </div>
        </div>
    )
}