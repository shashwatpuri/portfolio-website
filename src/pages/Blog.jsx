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
                <h1 className="text-2xl font-semibold text-textcolor1
                sm:text-3xl">Blog</h1>
                <div className="my-5 rounded-lg w-10 h-1.5 bg-accent1"></div>
            </article>
            <br />

            <div className="grid grid-cols-1 gap-6
            md:grid-cols-2">
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
        <div className="rounded-2xl shadow-2xl hover:cursor-pointer group bg-bgcolor2">
            <div className="flex rounded-2xl overflow-hidden justify-center">
                <img className="w-full h-60 group-hover:scale-105 transition duration-300 rounded-2xl object-cover
                sm:h-72
                md:h-56
                lg:h-72"
                    src={`${imageLink}`} alt="" />
            </div>

            <div className="p-6 pt-3
            sm:p-6">
                <h6 class="text-sm text-textcolor2/80">{publishDate} &nbsp; •  &nbsp;{readingTime} min</h6>
                <h6 class="py-2 text-textcolor1 font-bold text-lg transition duration-300 group-hover:text-accent1
                md:text-2xl">{title}</h6>
                <h6 class="text-sm text-textcolor2/80">{description}</h6>
            </div>
        </div>
    )
}
