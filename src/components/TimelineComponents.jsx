

export function TimelineSection({ timelineObject }) {
    console.log(timelineObject);
    return (
        <ul>
            {timelineObject.map((element) => {

                return (
                    <TimelineItem
                        title={element.title}
                        organization={element.organization}
                        tenure={element.tenure}
                        description={element.description}
                    />
                )

            })}
        </ul>
    )
}

export function TimelineItem({ title, tenure, description, organization }) {
    return (
        <li className="flex group ml-4">
            <div className="relative timelineItemBullet group-last:before:hidden">
            </div>

            <div className="pl-12 pb-5">
                <h2 className="mt-1 mb-1 font-semibold text-textcolor1">
                    {title}
                </h2>
                <p className="mb-2 text-text2/80 text-sm">{organization}</p>
                <p className="mb-1 text-accent1/80 text-sm">{tenure}</p>
                <p className="mb-1 font-light text-sm">{description.bullet1}</p>
                <p className="mb-1 font-light text-sm">{description.bullet2}</p>
                <p className="mb-1 font-light text-sm">{description.bullet3}</p>
                <p className="mb-1 font-light text-sm">{description.bullet4}</p>
            </div>
        </li >
    )
}