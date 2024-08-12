import GradientCardContainer from "./GradientCardContainer"

export default function SkillCard({ skillName, imageSource }) {
    return (
        <GradientCardContainer>
            <article className="flex flex-col gap-2 items-center
            sm:py-3 sm:px-2 sm:gap-4">
                <div className='max-w-8
                sm:max-w-16'>
                    <img src={`${imageSource}`} />
                </div>
                <div>
                    <h1 className="font-semibold text-textcolor1 text-base
                    sm:text-lg ">
                        {skillName}
                    </h1>
                </div>
            </article>
        </GradientCardContainer>
    )
}
