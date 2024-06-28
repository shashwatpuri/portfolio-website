

export function TimelineSection({ timelineObject }) {
    console.log(timelineObject);
    return (
        <ul>
            {timelineObject.map((element) => {

                return (
                    <TimelineItem
                        title={element.title}
                        tenure={element.tenure}
                        description={element.description}
                    />
                )

            })}
        </ul>
    )
}

export function TimelineItem({ title, tenure, description }) {
    return (
        <li className="flex group ml-4">
            <div className="relative timelineItemBullet group-last:before:hidden">
            </div>

            <div className="pl-12 pb-5">
                <h2 className="mt-1 mb-2 font-semibold text-textcolor1">
                    {title}
                </h2>
                <p className="text-accent1/80 text-sm">{tenure}</p>
                <p className="font-light text-sm">{description}</p>
            </div>
        </li >
    )
}