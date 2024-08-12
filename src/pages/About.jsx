import NicheInfoCard from "../components/NicheInfoCard"
import SkillCard from "../components/SkillCard"
import { bioLines, skillList, whatCanIDo } from "../config"


export default function About() {

    return (
        <>
            <article>
                <h1 className="text-2xl font-semibold text-textcolor1
                sm:text-3xl">About Me</h1>
                <div className="my-5 rounded-lg w-10 h-1.5 bg-accent1"></div>
            </article>

            {/* my bio */}
            <article>
                {bioLines.map((element) => {
                    return (<>
                        <p>{element}</p>
                        <br />
                    </>)
                })}
            </article>
            <br />

            {/* what I'm doing */}
            <article>
                <h1 className="text-xl font-semibold text-textcolor1
                sm:text-2xl">What can I do?</h1><br />
                <div className="grid grid-cols-1 gap-6 overflow-auto
                lg:grid-cols-2">

                    {whatCanIDo.map((element) => {
                        return (<NicheInfoCard
                            nicheName={element.heading}
                            nicheDescription={element.description}
                            imageSource={element.imageSource}
                        />)
                    })}
                </div>
                <br />
            </article>

            {/* my skills section */}
            <article>
                <h1 className="text-xl font-semibold text-textcolor1
                sm:text-2xl">My Skills</h1><br />

                <div className="flex gap-6 pb-5 overflow-x-auto hasScrollbar">

                    {skillList.map((element) => {
                        return (
                            <SkillCard
                                skillName={element.skillName}
                                imageSource={element.imageSource}
                            />)
                    })}

                </div>
            </article>
        </>
    )
}