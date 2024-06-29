import { useEffect, useState } from 'react'
import GradientCardContainer from '../components/GradientCardContainer'

const blogListGlobal = [{
    social_image: 'project-1.jpg',
    title: 'Something else in 2024',
    description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    readable_publish_date: "Jul 9 '22",
    reading_time_minutes: '2'
}, {
    social_image: 'blog-1.jpg',
    title: 'Design Conferences In 2022',
    description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    readable_publish_date: "Jul 9 '22",
    reading_time_minutes: '2'
}, {
    social_image: 'project-1.jpg',
    title: 'Design Conferences In 2022',
    description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    readable_publish_date: "Jul 9 '22",
    reading_time_minutes: '2'
}
]

export default function Blog() {

    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        // make fetch request to Dev.to api here...
        setBlogList([...blogListGlobal])
    }, [])

    return (
        <>
            <article>
                <h1 className="text-3xl font-semibold text-textcolor1">Blog</h1>
                <div className="my-5 rounded-lg w-10 h-1.5 bg-accent1"></div>
            </article>

            <div className="grid grid-cols-2 gap-10">
                {blogList.map((element) => <BlogListItem
                    imageLink={element.social_image}
                    title={element.title}
                    description={element.description}
                    readingTime={element.reading_time_minutes}
                    publishDate={element.readable_publish_date}
                />)}
            </div>
        </>
    )
}

export function BlogListItem({ imageLink, title, description, readingTime, publishDate }) {

    
    return (
        <div className=" rounded-2xl shadow-2xl hover:cursor-pointer group bg-bgcolor2">
            <div className="flex h-64 justify-center items-center rounded-2xl overflow-hidden">
                <img className="group-hover:scale-105 transition duration-300 object-cover rounded-2xl"
                    src={`${imageLink}`} alt="" />
            </div>

            <div className="p-6">

                <h6 class="text-sm text-textcolor2/80">{publishDate} &nbsp; •  &nbsp;{readingTime} min</h6>
                <h6 class="py-2 text-textcolor1 font-bold text-2xl transition duration-300 group-hover:text-accent1">{title}</h6>
                <h6 class="text-sm text-textcolor2/80">{description}</h6>
            </div>
        </div>
    )
}
