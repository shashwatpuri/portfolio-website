import { useState } from "react"

import InfoIconWrapper from "./InfoIconWrapper"


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
                {collapseInfoItems? "Show Contacts":"Hide Contacts"}
            </button>

            <article className="flex flex-row gap-5 items-center
            xl:flex-col
            ">
                <div className="flex justify-center rounded-3xl shadow-lg bg-bordercolor">
                    <img className="max-w-20
                    sm:max-w-28" 
                    src="my-avatar.png" alt="" />
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

                <InfoItem
                    label={'EMAIL'}
                    info={'shashwat@audiency.media'}
                    graphic={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#FFDB6E" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    }
                />
                <InfoItem
                    label={'PHONE'}
                    info={'+91 87704607734'}
                    graphic={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#FFDB6E" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    }
                />
                <InfoItem
                    label={'LOCATION'}
                    info={'Pune, India'}
                    graphic={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#FFDB6E" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    }
                />
                <InfoItem
                    label={'LINKEDIN'}
                    info={<a href="https://wwww.google.com">linkedin.com/shashwat-puri</a>}
                    graphic={
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24">
                            <path fill="#ffd86e" d="M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.88a2.5 2.5 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.5-2.5m1.5 15.38a1.51 1.51 0 0 1-1.5 1.5H5.56a1.51 1.51 0 0 1-1.5-1.5V5.56a1.51 1.51 0 0 1 1.5-1.5h12.88a1.51 1.51 0 0 1 1.5 1.5Z"></path>
                            <path fill="#ffd86e" d="M6.376 10.748a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0Z"></path>
                            <circle cx={7.376} cy={6.744} r={1} fill="#ffd86e"></circle>
                            <path fill="#ffd86e" d="M17.62 13.37v3.88a1 1 0 1 1-2 0v-3.88a1.615 1.615 0 1 0-3.23 0v3.88a1 1 0 0 1-2 0v-6.5a1.016 1.016 0 0 1 1-1a.94.94 0 0 1 .84.47a3.61 3.61 0 0 1 5.39 3.15"></path>
                        </svg>
                    }
                />
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