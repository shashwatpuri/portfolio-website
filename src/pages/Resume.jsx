import InfoIconWrapper from "../components/InfoIconWrapper";
import { TimelineItem, TimelineSection } from "../components/TimelineComponents";

const experienceTimeline = [{
    title: "University of Arts Ndpm",
    tenure: "2018 - 2022",
    description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
}, {
    title: "University of Arts Ndpm",
    tenure: "2018 - 2022",
    description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
}, {
    title: "University of Arts Ndpm",
    tenure: "2018 - 2022",
    description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
}]

const educationTimeline = [{
    title: "University of Arts Ndpm",
    tenure: "2018 - 2022",
    description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
}, {
    title: "University of Arts Ndpm",
    tenure: "2018 - 2022",
    description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
}, {
    title: "University of Arts Ndpm",
    tenure: "2018 - 2022",
    description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
}]


export default function Resume() {
    return (
        <>
            <article>
                <h1 className="text-3xl font-semibold text-textcolor1">Resume</h1>
                <div className="my-5 rounded-lg w-10 h-1.5 bg-accent1"></div>
            </article>
            <br />
            
            {/* Experience section */}
            <article>
                <div className="flex items-center gap-4 pb-5">
                    <InfoIconWrapper>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#FFDB6E" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    </InfoIconWrapper>
                    <h1 className=" text-2xl font-semibold text-textcolor1">Experience</h1><br />
                </div>
                <TimelineSection timelineObject={experienceTimeline} />
            </article>

            <br />
            {/* Education section */}
            <article>
                <div className="flex items-center gap-4 pb-5">
                    <InfoIconWrapper>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#ffd68e" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                    </InfoIconWrapper>
                    <h1 className=" text-2xl font-semibold text-textcolor1">Education</h1><br />
                </div>
                <TimelineSection timelineObject={educationTimeline} />
            </article>

        </>
    )
}
