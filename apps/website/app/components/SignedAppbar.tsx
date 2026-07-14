"use client"

import { useRouter } from "next/navigation"
import { InputBox } from "./InputBox"
import { Button } from "./Button"


export const SignedAppBar = () => {
    const router = useRouter();
    return(
        <div className="conatiner flex justify-between items-center shadow gap-6">
            <div className="px-3 py-4 text-primary-color text-3xl font-bold cursor-pointer" onClick={() => router.push("/")}>__H<span className="text-black text-shadow-primary-color">ermes </span> </div>
            <InputBox type="text" placeholder="search apps, templates, and more" className="hover:border-blue-700"/>
            <div className="">Help</div>
            <div>Explore</div>
            <Button variant="secondary" text="Contact" className="border " />
            <Button variant="secondary" text="Upgrade" className="border" />
            <Button variant="secondary" text = "D" className="rounded-4xl border-2 border-blue-700"/>
        </div>
    )
}