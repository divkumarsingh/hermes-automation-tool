import { Button } from "./Button"

export const UseSection = () => {
    return(
        <div className=" container flex flex-col gap-4 mx-2">
            <div className=" container flex grid-cols-4 divide-x divide-black bg-color-neutral">
                <div className=" px-2 text-center py-1">
                    <h1 className="text-xl font-semibold">One auth layer</h1>
                    <h2> No hardcore API keys. No broken OAuth flows. Every credentials is managed the same way </h2>
                </div>
                <div className=" px-2 text-center py-1">
                    <h1 className="text-xl font-semibold">One audit trail</h1>
                    <h2>Every action from any AI assistant or developer tool lands in a single admin log. Shadow IT becomes visible IT</h2>
                </div>
                <div className=" px-2 text-center py-1">
                    <h1 className="text-xl font-semibold">One policy set</h1>
                    <h2>IT decides which apps and actions are available. Those rules apply across MCP clients and SDK callers equally. One configuration, no exceptions.</h2>
                </div>
                <div className=" px-2 text-center py-1">
                    <h1 className="text-xl font-semibold">One runtime</h1>
                    <h2> All backed by Hermes’s 13-year-old production infrastructure. Not by whatever the LLM decided to write last Tuesday.</h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row gap-16 my-4 justify-between">
                    <div >
                        <div className="text-2xl text-primary-color">66,000+ </div>
                        <p className="text-md font-medium">Triggers and Actions</p>
                    </div>
                    <div>
                        <div className="text-2xl text-primary-color">9,000+</div>
                        <p className="text-md font-medium">App intergrations</p>
                    </div>
                    <div>
                        <div className="text-2xl text-primary-color">1</div>
                        <p className="text-md font-medium">Audit trail </p>
                    </div>
                <div className="flex flex-col gap-2 container place-items-center-safe">
                        <Button text="Learn more about Hermes" variant="primary"/>
                        <Button text="Learn more about Hermes" variant="secondary"/>
                    </div>    
                </div>
            </div>
        </div>
    )
}