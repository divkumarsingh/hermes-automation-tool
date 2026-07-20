
import { ReactNode } from "react"
import { Button } from "../Button"
import { CircleCheck } from 'lucide-react';

interface PricingCardProps {
    planType: string,
    price: string,
    duration?: string,
    description: string,
    point1: string
    point2: string
    point3: string
    point4?: string
    button?: ReactNode
}


export const PricingCard = ({planType, price, duration, description, point1, point2, point3, point4, button}: PricingCardProps) => {

    return(
        <div className=" container flex flex-col bg-white shadow-2s p-4  py-10 gap-2">
            <div className="text-slate-500 text-2xl">{planType}</div>
            <div className="text-5xl font-medium">{price}<span className="text-slate-500 text-2xl">{duration}</span></div>
            <div className="text-sm">{description}</div>
            <div className=" text-slate-400 font-medium flex gap-1 items-center" >{< CircleCheck className="w-5 h-5 text-red-500" />}{point1}</div>
            <div className=" text-slate-400 font-medium flex gap-1 items-center"> {< CircleCheck className="w-5 h-5 text-red-500" />}{point2}</div>
            <div className=" text-slate-400 font-medium flex gap-1 items-center">{< CircleCheck className="w-5 h-5 text-red-500" />}{point3}</div>
            <div className=" text-slate-400 font-medium flex gap-1 items-center">{< CircleCheck className="w-5 h-5 text-red-500" />}{point4}</div>
            {button}
        </div>
    )
}

export const FreePricingCard = () => {
    return(
        <PricingCard 
        planType="Free"
        price="$0"
        duration="/monthly"
        description="Ideal for individuals exploring basic automation"
        point1="5 active hooks"
        point2="Basic integration"
        point3 ="1,000 execution/month"
        point4="Free forever"

        button={<Button  variant="secondary" text="Get started" className="border-2 font-normal text-gray-500 m-2 hover:bg-primary-color hover:text-white" onClick={()=> {}}/>}
        />
    )
};

export const ProPricingCard = () =>{
    return(
        <PricingCard
        planType="Pro"
        price="$49"
        duration="/monthly"
        description="For power users and growing teams."
        point1="50 active hooks"
        point2="Premium integration"
        point3="50,000 execution/month"
        point4="Priority support"
        button={<Button  variant="secondary" text="Get started" className="border-2 font-normal text-gray-500 m-2 hover:bg-primary-color hover:text-white" onClick={()=> {}}/>}
        />
    )
}

export const EnterpriseCard = () => {
    return (
        <PricingCard
        planType="Enterprise"
        price="Custom"
        description="Tailored solution for large-scale operations"
        point1="unlimited active hooks"
        point2="Custom Integration"
        point3="Dedicated infrastructure"
        point4="24/7 uptime SLA"
        button={<Button  variant="secondary" text="Get started" className="border-2 font-normal text-gray-500 m-2 hover:bg-primary-color hover:text-white" onClick={()=> {}}/>}
        />
    )
}