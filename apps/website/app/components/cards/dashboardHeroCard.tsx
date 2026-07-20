interface dashboardHeroCardInterface {
    heading: string,
    data: string,
    subdata: string
    className?: string
}

export const DashboardHeroCard = ({heading, data, subdata, className}: dashboardHeroCardInterface) => {

    return(
        <div className="flex flex-col border border-primary-color gap-2 p-4 bg-gray-100 min-w-60">
            <p className="text-md font-lightbold text-gray-500">{heading}</p>
            <p className="text-3xl font-bold">{data}</p>
            <p className="text-sm text-red-500">{subdata}</p>
        </div>
    )

}