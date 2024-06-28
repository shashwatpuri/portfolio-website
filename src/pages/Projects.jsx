import { useEffect, useState } from "react"
import {
    useLocation,
    useNavigate
} from "react-router-dom"


const projectTagList = [
    'All',
    'Full Stack',
    'Frontend',
    'Backend'
]

const projectListGlobal = [{
    title: 'project 1',
    tag: 'Full Stack',
    imageLink: 'project-1.jpg',
    projectLink: 'https://www.google.com'
}, {
    title: 'project 2',
    tag: 'Full Stack',
    imageLink: 'project-1.jpg',
    projectLink: 'https://www.google.com'
}, {
    title: 'project 3',
    tag: 'Full Stack',
    imageLink: 'project-1.jpg',
    projectLink: 'https://www.google.com'
}, {
    title: 'project 4',
    tag: 'Backend',
    imageLink: 'project-1.jpg',
    projectLink: 'https://www.google.com'
}, {
    title: 'project 5',
    tag: 'Backend',
    imageLink: 'project-1.jpg',
    projectLink: 'https://www.google.com'
}, {
    title: 'project 6',
    tag: 'Backend',
    imageLink: 'project-1.jpg',
    projectLink: 'https://www.google.com'
}, {
    title: 'project 7',
    tag: 'Frontend',
    imageLink: 'project-1.jpg',
    projectLink: 'https://www.google.com'
}, {
    title: 'project 8',
    tag: 'Frontend',
    imageLink: 'project-1.jpg',
    projectLink: 'https://www.google.com'
},]


export default function Projects() {

    const [activeTab, setActiveTab] = useState('All')
    // tabList - tab list items
    const [tabList, setTabList] = useState(projectTagList)

    return (
        <>
            <article>
                <h1 className="text-3xl font-semibold text-textcolor1">Portfolio</h1>
                <div className="my-5 rounded-lg w-10 h-1.5 bg-accent1"></div>
            </article>

            <ProjectsSubNavbar activeTab={activeTab} setActiveTab={setActiveTab} tabList={tabList} />
            <br />
            <ProjectsListComponent activeTab={activeTab} />
        </>
    )
}

export function ProjectsSubNavbar({ activeTab, setActiveTab, tabList }) {

    return (
        <nav className="text-sm">
            <ul className='flex py-2 gap-6'>
                {tabList.map((element) => <NavListItem label={element} activeTab={activeTab} setActiveTab={setActiveTab} />)}
            </ul>
        </nav>
    )
}

export function NavListItem({ label, activeTab, setActiveTab }) {

    return (
        <li>
            <button
                className={`${activeTab == label ? 'text-accent1' : 'text-textcolor2 hover:text-textcolor2/70'}`}
                onClick={() => {
                    setActiveTab(label)
                }} >
                {label}
            </button>
        </li>
    )
}


export function ProjectsListComponent({ activeTab }) {
    const [projectListDynamic, setProjectListDynamic] = useState([])

    useEffect(() => {

        // temp variable to store projects (filter criteria wise)
        const projectListDynamicHelper = projectListGlobal.filter((element) => {
            if (activeTab == 'All') { return true }
            if (element.tag == activeTab) { return true }
            else { return false }
        })
        setProjectListDynamic([...projectListDynamicHelper])
    }, [activeTab])

    return (
        <>
            <div className="grid grid-cols-3 gap-7">

                {projectListDynamic.map((element) =>
                    <>
                        <ProjectListItem title={element.title} tag={element.tag} imageLink={element.imageLink} />
                    </>
                )}
            </div>

        </>
    )
}

export function ProjectListItem({ title, tag, imageLink }) {
    return (
        <div class="group hover:cursor-pointer">

            <div class="relative mb-3 rounded-2xl overflow-hidden ">
                <img className="group-hover:scale-110 transition duration-200 rounded-2xl" src={`${imageLink}`} alt="" />
                
                {/* On hover - Dimming & eye icon visible */}
                <div className="flex absolute top-0 left-0 bottom-0 right-0 justify-center items-center group-hover:bg-[#000000]/50">
                    <div className="invisible group-hover:visible p-3 rounded-lg bg-bordercolor">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffdb6e" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="pl-3">
                <h6 class=" text-textcolor1 font-medium">{title}</h6>
                <h6 class="text-textcolor2/80">{tag}</h6>
            </div>
        </div>
    )
}