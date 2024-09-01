import { useState } from "react"

import InfoIconWrapper from "./InfoIconWrapper"
import { infoItems } from "../config"
import myImage from'../../public/my-avatar.png'

export default function PersonalInfoSection() {
    const [collapseInfoItems, setCollapseInfoItems] = useState(true)

    return (
        <aside className="self-center w-full relative flex flex-col overflow-auto p-4 pt-8 border border-bordercolor rounded-2xl bg-bgcolor1 text-textcolor1 cursor-pointer
        sm:max-w-xl sm:p-8
        md:max-w-3xl
        lg:max-w-[950px]
        xl:cursor-default xl:w-auto xl:self-start
        "
            onClick={() => setCollapseInfoItems(!collapseInfoItems)}
        >

            <button className="absolute top-0 right-0 p-2 border-b border-l border-bordercolor bg-gradient-to-br from-bordercolor rounded-es-2xl text-accent1 text-xs
            md:text-sm
            xl:invisible
            "
            >
                {collapseInfoItems ? "Show Contacts" : "Hide Contacts"}
            </button>

            <article className="flex flex-row gap-5 items-center
            xl:flex-col
            ">
                <div className="flex justify-center rounded-3xl shadow-lg bg-bordercolor">
                    <img className="max-w-20
                    sm:max-w-28"
                    src={'/my-avatar.png'} />
                </div>
                <div className="flex flex-col items-start gap-2
                xl:items-center
                ">
                    <h1 className="font-medium text-lg
                    sm:text-2xl sm:font-semibold
                    ">
                        Shashwat Puri
                    </h1>
                    <h2 className="px-3 py-1 bg-[#383838]/40 rounded-lg text-xs text-textcolor2 
                    sm:text-sm">
                        Web Developer
                    </h2>
                </div>

            </article>

            <article className={`${collapseInfoItems ? 'h-0 pb-0' : 'h-full pb-5'} transition-all duration-300 flex flex-col gap-5 overflow-auto
            sm:gap-7
            xl:h-full xl:pb-5
            `}>
                <div className="mt-4 border-b border-bordercolor" >
                </div>

                {infoItems.map((element) => {
                    return (<InfoItem
                        label={element.label}
                        info={element.info}
                        graphic={element.graphic}
                    >
                    </InfoItem>)
                })}

            </article>
        </aside>
    )
}

export function InfoItem({ graphic, label, info }) {
    return (
        <div className="flex items-center gap-3 ">
            <InfoIconWrapper>
                {graphic}
            </InfoIconWrapper>

            <div>
                <p className="text-xs text-[#d6d6d6]/70 ">{label}</p>
                <p className="text-sm font-light text-textcolor1 ">{info}</p>
            </div>
        </div>
    )
}