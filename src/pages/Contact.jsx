import NicheInfoCard from "../components/NicheInfoCard"


export default function Contact() {
    return (
        <>
            <article>
                <h1 className="text-3xl font-semibold text-textcolor1">Contact</h1>
                <div className="my-5 rounded-lg w-10 h-1.5 bg-accent1"></div>
            </article>

            <br />
            <ContactTabsContainer />
        </>
    )
}

export function ContactTabsContainer() {

    return (

        <div className="flex flex-col">

            {/* LHS Container */}
            <div className="flex justify-start gap-6 pb-5 overflow-x-auto hasScrollbar">

                <NicheInfoCard
                    imageSource={'web-development.svg'}
                    nicheName={"linkedin contact"}
                    nicheDescription={
                        <div>
                            <p>We are here to support you all the way</p>
                            <a className="text-textcolor1 text-sm hover:text-textcolor2"
                                href="https://wwww.google.com">
                                Contact Support 🡥
                            </a>
                        </div>
                    }
                />
                <NicheInfoCard
                    imageSource={'web-development.svg'}
                    nicheName={"linkedin contact"}
                    nicheDescription={
                        <div>
                            <p>We are here to support you all the way</p>
                            <a className="text-textcolor1 text-sm hover:text-textcolor2"
                                href="https://wwww.google.com">
                                Contact Support 🡥
                            </a>
                        </div>
                    }
                />
                <NicheInfoCard
                    imageSource={'web-development.svg'}
                    nicheName={"linkedin contact"}
                    nicheDescription={
                        <div>
                            <p>We are here to support you all the way</p>
                            <a className="text-textcolor1 text-sm hover:text-textcolor2"
                                href="https://wwww.google.com">
                                Contact Support 🡥
                            </a>
                        </div>
                    }
                />
            </div>

            <br /><br />
            <iframe className="self-center rounded-2xl border border-2 border-bordercolor h-[500px] w-2/3"
                src="https://calendly.com/goswamishashwatpuri1/30min?background_color=1e1e1f&text_color=d6d6d6&primary_color=ffdb6e">
            </iframe>



        </div>

    )
}