import GradientCardContainer from "./GradientCardContainer"

export default function SkillCard({ skillName, imageSource }) {
    return ( 
            <article className="flex flex-col gap-2 items-center p-2
             sm:gap-5 hover:bg-bordercolor/50 shadow-2xl rounded-xl">
                <div className='w-10
                sm:max-w-14'>
                    <img src={`/${imageSource}`} />
                </div>
                <div>
                    <h1 className="font-light text-center text-textcolor1 text-base 
                    sm:text-lg">
                        {skillName}
                    </h1>
                </div>
            </article>
    )
}