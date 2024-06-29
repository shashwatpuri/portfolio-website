import { useEffect, useState } from "react"
import {
    useLocation,
    useNavigate
} from "react-router-dom"


export default function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()

    // Slice '/About' to 'About'
    let tabName = location.pathname.slice(1)

    // logic - first user landing on '/' renders empty page.
    // So if - url = '/' then redirect user to 'About'.
    if (tabName == '') {
        tabName = 'About'
    }
    const [activeTab, setActiveTab] = useState(tabName)
    useEffect(() => {
        navigate(`/${tabName}`)
    }, [activeTab])

    return (
        <nav className="border-t border-x rounded-t-xl border-bordercolor bg-bgcolor3/60 backdrop-blur text-xs
        sm:text-sm
        md:px-10 md:text-base 
        lg:border-l lg:border-b lg:rounded-es-2xl lg:rounded-se-2xl lg:rounded-s-none lg:bg-bgcolor3 lg:font-medium
         ">
            <ul className="flex px-4 py-5 gap-5 justify-center
            sm:gap-9
            ">
                <NavListItem label='About' activeTab={activeTab} setActiveTab={setActiveTab} />
                <NavListItem label='Resume' activeTab={activeTab} setActiveTab={setActiveTab} />
                <NavListItem label='Projects' activeTab={activeTab} setActiveTab={setActiveTab} />
                <NavListItem label='Blog' activeTab={activeTab} setActiveTab={setActiveTab} />
                <NavListItem label='Contact' activeTab={activeTab} setActiveTab={setActiveTab} />
            </ul>
        </nav>
    )
}

function NavListItem({ label, activeTab, setActiveTab }) {
    const navigate = useNavigate()
    return (
        <li>
            <button
                className={`${activeTab == label ? 'text-accent1' : 'text-textcolor2 hover:text-textcolor2/70'}`}
                onClick={() => {
                    setActiveTab(label)
                    navigate(`/${label}`)
                }} >
                {label}
            </button>
        </li>
    )
}