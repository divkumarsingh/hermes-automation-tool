"use client"

import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { EnterpriseCard, FreePricingCard, PricingCard, ProPricingCard } from "../components/cards/PricingCard"
import { ToogleButton } from "../components/Button/ToogleButton"
import { Table } from "../components/cards/Table"
import { Footer } from "../components/Footer"


export  default function page() {
    return (
        <div >
            <div>
                <AppBar/>
            </div>
            <div>
                <div className="flex flex-col gap-2  p-4 items-center my-20">
        
                <p className="text-4xl font-bold text-gray-900 mb-3"> Simple, scalable Pricing</p>
                <p className="text-lg font-medium max-w-xl text-center ">Choose the perfect plan for your automation needs. No hidden fees, just pure productivity.</p>
            </div>
            
            <div className=" flex gap-2 mx-4 mb-10">
                    <FreePricingCard/>
                    <ProPricingCard/>
                    <EnterpriseCard/>
            </div>
            <p className=" font-thinbold text-center text-4xl">Compare Features </p>  
            <div>
                <Table/>
                <Footer/>
            </div>  
            </div>

        </div>
    )
}