import React from 'react'
import blog_logo from '@/assets/images/home/blogintro/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, } from '@fortawesome/free-solid-svg-icons'
const BlogSummary = (props: any) => {
    const formattedDate = (dateSeconds: any) => {
        const date = new Date(dateSeconds * 1000);
        var dateString = date.toDateString()
        return dateString.substring(4, dateString.length)
    }

    return (
        <div className='flex bg-teal rounded-xl mx-auto w-80 sm:w-96 my-6'>
            <a href={`https://mythicala.vercel.app//blogs/${props.data.id}`}>
                <img src={props.data.coverPhoto} className='w-32 sm:w-40 h-24 rounded-l-xl cursor-pointer' />
            </a>
            <div className='text-white ml-6 mt-2'>
                <a href={`https://mythicala.vercel.app//blogs/${props.data.id}`}>
                    <p className='uppercase font-semibold cursor-pointer text-xl hover:text-dark-grey'>{props.data.blogTitle}</p>
                </a>
                <div className="flex">
                    <FontAwesomeIcon icon={faClock} className="text-white mt-1" />
                    <p className="text-md text-white ml-2">{formattedDate(props.data.createdAt.seconds)}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogSummary
