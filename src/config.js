// Contains data to be injected into website.
// Personal info, experience, projects and everything else.. 


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
    },{
        heading: 'Optimized Databases',
        description: 'Creating optimal database schemas, integrating & interacting with them using ORMs & SQL',
        imageSource: 'database.png'
    },{
        heading: 'External Apis',
        description: 'Making RESTful APIs on Express.js & Hono. Integrating 3rd party APIs. Handing data formats like JSON, XML.',
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
    title: "Masters in Business Administration",
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
