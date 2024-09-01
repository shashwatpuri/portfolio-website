import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { applicationsData } from "../config"
import SkillCard from "../components/SkillCard"
import InfoIconWrapper from "../components/InfoIconWrapper"
import { TimelineSection } from "../components/TimelineComponents"


export default function Application() {

    const [data, setData] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const location = useLocation().pathname.split('/')
    const navigate = useNavigate()

    useEffect(() => {
        const dataVariableName = location.pop()
        if (dataVariableName in applicationsData) {
            setData(applicationsData[dataVariableName])

            // TRACKING LINK - turned off in dev-mode
            data? fetch(data.trackingLink) : null
        }
        else {
            setErrorMessage("Sorry page Not found, redirecting..")
            setTimeout(() => {
                setErrorMessage('')
                navigate('/About')
            }, 3000)
            return
        }
    }, [])

    if (!data) {
        return <>
            {/* wrong url error redirect message */}
            {errorMessage ?
                <div className="text-xl font-semibold text-accent1" >
                    {errorMessage}
                </div>
                :
                ''
            }
        </>
    }
    return (
        <>
            <article>
                <h1 className="text-2xl font-semibold text-textcolor1 max-w-md
                sm:text-3xl">Let's say, this is our heading.</h1>
                <div className="my-5 rounded-lg w-10 h-1.5 bg-accent1"></div>
            </article>

            {/* About company - Personalization */}
            <article>
                {data.personalization.map((element) => {
                    return (<>
                        <div className="hover:bg-accent1/90 hover:text-bgcolor1 p-1 rounded-lg">
                            <span className="text-accent1">● </span> {element}
                        </div>
                        <br />
                    </>)
                })}
            </article>
            <br />

            {/* I understand the role */}
            <article>
                <div className="flex items-center gap-4 pb-5">
                    <InfoIconWrapper>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#FFDB6E" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    </InfoIconWrapper>
                    <h1 className=" text-2xl font-semibold text-textcolor1">I understand the role</h1><br />
                </div>
                <TimelineSection timelineObject={data.pitch} />
            </article>
            <br />

            {/* my relevant skills */}
            <h1 className="text-xl font-semibold text-textcolor1
                sm:text-2xl">My skills for this role.</h1><br />

            <div className="hasScrollbar pb-5 overflow-x-auto flex flex-row gap-5">
                {data.skills.map((element) => {
                    return (
                        <SkillCard
                            skillName={element.skillName}
                            imageSource={element.imageSource}
                        />)
                })}
            </div>

        </>
    )
}