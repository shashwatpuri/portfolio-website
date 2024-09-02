// Contains data to be injected into website.

// Personal info section data.
export const infoItems = [
    {
        label: 'EMAIL',
        info: 'goswamishashwatpuri1@gmail.com',
        graphic: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#FFDB6E" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
    }, {
        label: 'PHONE',
        info: '+91 8770460734',
        graphic: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#FFDB6E" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
    }, {
        label: 'LOCATION',
        info: 'Pune, India',
        graphic: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#FFDB6E" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
    }, {
        label: 'LINKEDIN',
        info: <a href="https://www.linkedin.com/in/shashwat-puri/" target="_blank">linkedin.com/shashwat-puri</a>,
        graphic: <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24">
            <path fill="#ffd86e" d="M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.88a2.5 2.5 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.5-2.5m1.5 15.38a1.51 1.51 0 0 1-1.5 1.5H5.56a1.51 1.51 0 0 1-1.5-1.5V5.56a1.51 1.51 0 0 1 1.5-1.5h12.88a1.51 1.51 0 0 1 1.5 1.5Z"></path>
            <path fill="#ffd86e" d="M6.376 10.748a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0Z"></path>
            <circle cx={7.376} cy={6.744} r={1} fill="#ffd86e"></circle>
            <path fill="#ffd86e" d="M17.62 13.37v3.88a1 1 0 1 1-2 0v-3.88a1.615 1.615 0 1 0-3.23 0v3.88a1 1 0 0 1-2 0v-6.5a1.016 1.016 0 0 1 1-1a.94.94 0 0 1 .84.47a3.61 3.61 0 0 1 5.39 3.15"></path>
        </svg>
    },
]

// About section
export const bioLines = [
    `I'm a MERN Stack developer with strong foundation in building robust and scalable web applications.
    I bring a blend of technical expertise and business acumen.`
    ,
    `A graduate IT Engineer currently pursuing an MBA at Bharati Vidyapeeth University to further enhance my strategic thinking.`
    ,
    `Founded Audiency Media in Jan 2022 - a b2b marketing agency for 2 years, honed my skills in automation, client management & cold email campmaigns.
    Now, fueled by a renewed passion for coding.`
    ,
    `Proficient in MERN, ORMs, deployment, HTML, CSS, and JavaScript, I'm eager to contribute to dynamic projects.`
]

export const skillList = [
    { skillName: 'React.js', imageSource: 'reactlogo.svg' },
    { skillName: 'Tailwind', imageSource: 'tailwindcsslogo.svg' },
    { skillName: 'Node.js', imageSource: 'nodejslogo.svg' },
    { skillName: 'Express.js', imageSource: 'expressjslogo.svg' },
    { skillName: 'MongoDB', imageSource: 'mongodblogo.svg' },
    { skillName: 'JavaScript', imageSource: 'jslogo.svg' },
    { skillName: 'Next.js', imageSource: 'nextjslogo.svg' },
    { skillName: 'Prisma (ORMs)', imageSource: 'prismalogo.svg' }
]

export const whatCanIDo = [
    {
        heading: 'Elegant Frontends',
        description: 'Crafting pixel-perfect UIs with React.js, CSS & Tailwind.',
        imageSource: 'frontend.png'
    }, {
        heading: 'Robust Backends',
        description: 'Building scalable backends, both serverless & traditional. And deploying them.',
        imageSource: 'backend.png'
    }, {
        heading: 'Optimized Databases',
        description: 'Creating optimal database schemas, integrating & interacting with them using ORMs & SQL',
        imageSource: 'database.png'
    }, {
        heading: 'External APIs',
        description: 'Making RESTful APIs on Express.js & Hono. 3rd party APIs. Handing data formats like JSON, XML.',
        imageSource: 'Api.svg'
    },
]

// Resume section
export const experienceTimeline = [{
    title: "Co-Owner | B2B Outbound",
    organization: "Audiency Media",
    tenure: "Jan 2022 - March 2024",
    description: {
        bullet1: '● Content strategies for B2B founders & ran outbound campaigns - brought $300k in pipeline for them.',
        bullet2: '● Created automations using google Appscript & webhooks',
        bullet3: '● Managed list building, cleaning & optimized campagins using data analysis.',
        bullet4: '● Worked on Low-Code tools like Wix, Bubble.io.',
    }
}, {
    title: "React Native Developer",
    organization: "Asmadiya Technologies",
    tenure: "Jun 2021 - August 2021",
    description: {
        bullet1: '● Developed React Native app for an in-house product.',
        bullet2: '● Integrated a Tensorflow model into the application using TFLite.',
        bullet3: '● Used compresssion techniques to shrink APK size by 50%.',
        bullet4: '● Prepared the product to be pitched to investors.',
    }
}, {
    title: "React Native Developer, Marketing Strategist",
    organization: "Aaramsa",
    tenure: "Jul 2020 - Oct 2020",
    description: {
        bullet1: '● Developed React Native app for quick grocery delivery service during COVID-19.',
        bullet2: '● Integrated with Laravel based backend via APIs. Created dynamic elements for announcements.',
        bullet3: '● Did market research for running paid traffic campaigns.',
    }
}]

export const educationTimeline = [{
    title: "Master of Business Administration",
    organization: "Bharati Vidyapeeth University SOE - Online Mode",
    tenure: "Jan 2023 - Present",
    description: {
        bullet1: 'Specialization - Finance & IT management',
    }
}, {
    title: "B.tech, Information Technology",
    organization: "Bharati Vidyapeeth University, Pune",
    tenure: "Jun 2018 - July 2022",
    description: {
    }
}, {
    title: "Diploma in Network Security ",
    organization: "Bharati Vidyapeeth University, Pune",
    tenure: "2018 - 2022",
    description: {
    }
}]


// applications data
export const applicationsData = {

    audiency: {
        trackingLink: 'https://2ly.link/1zVO4',
        companyName: "Lunacal",
        position: "Frontend Developer",
        personalization: [
            `I'm a MERN Stack developer with strong foundation in building robust and scalable web applications.
            I bring a blend of technical expertise and business acumen.`
            ,
            `A graduate IT Engineer currently pursuing an MBA at Bharati Vidyapeeth University to further enhance my strategic thinking.`
            ,
            `Proficient in MERN, ORMs, deployment, HTML, CSS, and JavaScript, I'm eager to contribute to dynamic projects.`
        ],
        pitch: [{
            title: "Reas;edflkg;lSKJDFct Native Developer, Marketing Strategist",
            description: {
                bullet1: '● Developed React Native app for quick grocery delivery service during COVID-19.',
                bullet2: '● Integrated with Laravel based backend via APIs. Created dynamic elements for announcements.',
                bullet3: '● Did market research for running paid traffic campaigns.',
            }
        }, {
            title: "Mastaskjfd aler of Business Administration",
            description: {
                bullet1: '● Developed React Native app for quick grocery delivery service during COVID-19.',
                bullet2: '● Integrated with Laravel based backend via APIs. Created dynamic elements for announcements.',
                bullet3: '● Did market research for running paid traffic campaigns.',
            },
        },
        ],
        skills: skillList,
    },

    lunacal: {
        trackingLink: 'https://2ly.link/1zVO4',
        heading1: `Lunacal needs a Front-end Dev!`,
        personalization: [
            `I just spoke to Pranshu on call and was immediately thrilled to know what you're building here at Lunacal.`
            ,
            `You JD mentiones Next.js & React - and I had to immediately apply as I'm already working on them.`
            ,
            `You're building a new Calendar and much more, and you need a sensible, pragmatic intern who can take on Frontend Dev hat, without much pampering.`
        ],
        heading2: `I understand the role :)`,
        pitch: [{
            title: "You need someone who's worked on React + Tailwind & Nextjs.",
            description: {
                bullet1: `● This page itself is built on React + Tailwind :)`,
                bullet2: `● I understand Next's paradigm and opinionated approach fairly.`,
                bullet3: `● Currently part of a Full Stack development live cohort - offered by Harkirat Singh. Constantly upgrading my skills.`,
            }
        }, {
            title: `I assume you're fast paced.`,
            description: {
                bullet1: `● You need an intern who you can mentor, yet also need them to be responsible and self managed. `,
                bullet2: `● You need someone so can quickly fit like a cog into whole Lunacal's wheelbase and start contributing`,
            }
        }, {
            title: `I've trained interns myself.`,
            description: {
                bullet1: `● At my previous business (Audiency) I trained a team of 4 interns`,
                bullet2: `● I preciasely understand how interns are expected to perform in a team`,
                bullet3: `● Hence I'm ready to bring that experience to the table.`,
            },
        },
        ],
        skills: skillList,
    },
}