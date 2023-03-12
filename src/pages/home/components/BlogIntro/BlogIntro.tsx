import React, { useEffect, useState } from 'react'
import { GetAllOrderedBlogs } from '../../../../api/CRUD_API';
import blog_logo from '../../../../assets/images/home/blogintro/logo.png'
import AppButton from '../../../../global_components/AppButton';
import TitlePage from '../../../../global_components/TitlePage';
import BlogSummary from './sub_components/BlogSummary';

const BlogIntro = () => {
    const [latestBlogs, setLatestBlogs] = useState<any>([]);

    useEffect(() => {
        GetAllOrderedBlogs('createdAt', 'blogs').then((orderByViewBlogs) => {
            setLatestBlogs(orderByViewBlogs.slice(0, 3))
        })
    }, [])

    return (
        <div className='flex sm:bg-[url(src/assets/images/home/blogintro/background.jpg)] lg:bg-[url(src/assets/images/home/blogintro/background1.jpg)]
            bg-cover items-center justify-around'>
            <div className='max-lg:hidden w-1/5'>
                <div className="flex my-2 cursor-default"
                >
                    <img
                        src={blog_logo}
                        alt="logo"
                        className="w-16 h-16 mt-1.5 mx-2"
                    />
                    <p className={`text-white px-0 pt-3.5 md:pt-4 
                    text-5xl
                `}>
                        Mythicala
                    </p>
                </div>
                <p className='text-white text-base lg:text-lg'>
                    A collection of myths related to Mystrade's products, and more...
                </p>
                <a href='https://mythicala.vercel.app/blogs'>
                    <AppButton content='Explore' />
                </a>
            </div>
            <div className='bg-brown w-full sm:w-4/5 lg:w-2/5 pt-4 lg:rounded-xl sm:my-8'>
                <TitlePage title='Latest myths' className='max-lg:hidden text-white text-3xl xl:text-5xl' />
                <TitlePage title='Mythicala' className='lg:hidden text-white text-3xl md:text-5xl' />
                <div className=''>
                    {
                        latestBlogs.map((blog: any) => <BlogSummary data={blog} key={blog.id} />)
                    }
                </div>
                <a href='https://mythicala.vercel.app/blogs'>
                    <AppButton content='Explore' className='lg:hidden mx-auto' />
                </a>
            </div>
        </div>
    )
}

export default BlogIntro
