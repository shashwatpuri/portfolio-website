import GradientCardContainer from "./GradientCardContainer"

export default function NicheInfoCard({ nicheName, nicheDescription, imageSource }) {
    return (
        <GradientCardContainer>
            <article className="flex min-w-72 gap-4">
                <div className="pt-2">
                    <img className='max-w-16' src={`${imageSource}`} />
                </div>
                <div>
                    <h1 className="mb-2 text-lg font-semibold text-textcolor1">
                        {nicheName}
                    </h1>
                    <div className="font-light">
                        {nicheDescription}
                    </div>
                </div>
            </article>
        </GradientCardContainer>
    )
}
