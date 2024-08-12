import NicheInfoCard from "../components/NicheInfoCard"


export default function Contact() {
    return (
        <>
            <article>
                <h1 className="text-2xl font-semibold text-textcolor1
                sm:text-3xl">Contact</h1>
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

            {/* Horizontal scroll contact options  */}
            <div className="hasScrollbar flex flex-col justify-start gap-6 pb-5
            sm:flex-row sm:overflow-x-auto">

                <NicheInfoCard
                    imageSource={'linkedinlogo.svg'}
                    nicheName={"Connect On LinkedIn"}
                    nicheDescription={
                        <div>
                            <p>I talk all things tech. Shoot me a dm!</p>
                            <a className="text-textcolor1 text-sm hover:text-accent1"
                                href="https://www.linkedin.com/in/shashwat-puri/" target="_blank">
                                Click Here 🡥
                            </a>
                        </div>
                    }
                />
                <NicheInfoCard
                    imageSource={'calendlylogo.svg'}
                    nicheName={"Book Me On Calendly"}
                    nicheDescription={
                        <div className="">
                            <p>Find a slot on Calendly & setup a meeting.</p>
                            <a className="text-textcolor1 text-sm hover:text-accent1"
                                href="https://calendly.com/goswamishashwatpuri1/30min">
                                Click Here 🡥
                            </a>
                        </div>
                    }
                />
                <NicheInfoCard
                    imageSource={'emaillogo.svg'}
                    nicheName={"Drop Me An Email"}
                    nicheDescription={
                        <div>
                            <p>Or maybe.. emails would work</p>
                            <a className="text-textcolor1 text-sm hover:text-accent1"
                                href="mailto:goswamishashwatpuri1@gmail.com">
                                Click Here 🡥
                            </a>
                        </div>
                    }
                />
            </div>

            <br /><br />
            <iframe className="h-[500px] w-full self-center rounded-2xl border border-2 border-bordercolor 
            md:w-9/12"
                src="https://calendly.com/goswamishashwatpuri1/30min?background_color=1e1e1f&text_color=d6d6d6&primary_color=ffdb6e">
            </iframe>

        </div>

    )
}