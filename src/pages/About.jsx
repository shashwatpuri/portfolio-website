import GradientCardContainer from "../components/GradientCardContainer"
import NicheInfoCard from "../components/NicheInfoCard"


export default function About() {
    const bioLine1 = "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs."
    const bioLine2 = "My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies."

    return (
        <>
            <article>
                <h1 className="text-3xl font-semibold text-textcolor1">About Me</h1>
                <div className="my-5 rounded-lg w-10 h-1.5 bg-accent1"></div>
            </article>

            <article className="font-light">
                <p>{bioLine1}</p>
                <br />
                <p>{bioLine2}</p>
            </article>

            <br /><br />

            <article>
                <h1 className="text-2xl font-semibold text-textcolor1">What I'm Doing</h1><br />
                <div className="grid grid-cols-2 gap-6 overflow-auto">
                    <NicheInfoCard
                        nicheName={'Web Development'}
                        nicheDescription={'The most modern and high-quality design made at a professional level.'}
                        imageSource='web-development.svg'
                    />

                </div>
            </article>

            <br /><br />

            <article>
                <h1 className="text-2xl font-semibold text-textcolor1">Testimonials</h1><br />

                <div className="flex gap-6 pb-5 overflow-x-auto hasScrollbar">

                    <NicheInfoCard
                        nicheName={'Web Development'}
                        nicheDescription={'The most modern and high-quality design made at a professional level.'}
                        imageSource='web-development.svg'
                    />
                    <NicheInfoCard
                        nicheName={'Web Development'}
                        nicheDescription={'The most modern and high-quality design made at a professional level.'}
                        imageSource='web-development.svg'
                    />
                    <NicheInfoCard
                        nicheName={'Web Development'}
                        nicheDescription={'The most modern and high-quality design made at a professional level.'}
                        imageSource='web-development.svg'
                    />
                    <NicheInfoCard
                        nicheName={'Web Development'}
                        nicheDescription={'The most modern and high-quality design made at a professional level.'}
                        imageSource='web-development.svg'
                    />
                </div>
            </article>
        </>
    )
}