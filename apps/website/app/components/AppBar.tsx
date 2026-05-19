"use client"
import { useRouter } from "next/navigation";
import { Button } from "./Button"
import { Logo } from "./Logo"
import { usePathname } from "next/navigation";

export const AppBar = () => {
    const route = usePathname();
    const router = useRouter();

    return <div className=" container flex flex-row justify-between items-center px-4 py-2 gap-4 shadow">
        <div className="container flex flex-row justify-center items-center gap-6">
            <div className="px-3 py-4 text-primary-color text-3xl font-bold cursor-pointer" onClick={() => router.push("/")}>__H<span className="text-black text-shadow-primary-color">ermes </span> </div>
            <div className="px-3 py-4 hover:text-primary-color hover:cursor-pointer hover:bg-white" onClick={() => router.push("/products")}>Products</div>
            <div className="px-3 py-4 hover:text-primary-color cursor-pointer hover:bg-white" onClick={() => router.push("/solutions")}>Solutions</div>
            <div className=" px-3 py-4 hover:text-primary-color cursor-pointer hover:bg-white" onClick={() => router.push("/pricing")}>pricing</div>
        </div>
        <div className="container">
            <div className=" container flex flex-row justify-center items-center gap-6 ">
                <div className="px-3 py-4 hover:text-primary-color cursor-pointer hover:bg-white" onClick={() => router.push("/contacts")}>Contact</div>
                <div className="px-3 py-4 hover:text-primary-color cursor-pointer hover:bg-white" onClick={() => router.push("/login")}>Log in</div>
                <Button variant="primary" text="Sign up" className="rounded-3xl py-4 px-8 overflow-hidden" onClick={()=> router.push("/signup")}/>
            </div>
        </div>

    </div>
}