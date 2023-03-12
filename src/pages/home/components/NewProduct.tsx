import React from 'react'
import wukong from '../../../assets/images/home/newproduct/wukong.jpg'
import tang from '../../../assets/images/home/newproduct/tang monk.jpg'
import bajie from '../../../assets/images/home/newproduct/bajie.jpg'
import wujing from '../../../assets/images/home/newproduct/shawujing.jpg'
import jtwmb from '../../../assets/images/home/newproduct/jtwmb.jpg'
import jtwmb2 from '../../../assets/images/home/newproduct/jtwmb2.jpg'

const NewProduct = () => {
    return (
        <div className='bg-[url(src/assets/images/home/newproduct/jtw.jpg)]
            bg-no-repeat bg-cover bg-center max-lg:h-96 pt-6'
        >
            <p className='text-xl sm:text-4xl xl:text-5xl text-center text-white py-2 rounded-full bg-teal
                mx-6 sm:mx-10 lg:mx-52 xl:mx-72 2xl:mx-96 
            '>Journey to the West collection</p>
            <div className='hidden lg:flex justify-center lg:m-8 lg:mb-0'>
                <img src={bajie}
                    className='xl:h-72 2xl:h-96 h-60
                    rounded-lg w-auto transition-all hover:scale-110 cursor-pointer
                    m-8 my-16 '
                />
                <img src={tang}
                    className='xl:h-72 2xl:h-96 h-60
                    rounded-lg w-auto transition-all hover:scale-110 cursor-pointer
                    mx-8 mb-8 '
                />
                <img src={wukong}
                    className='xl:h-72 2xl:h-96 h-60
                    rounded-lg w-auto transition-all hover:scale-110 cursor-pointer
                    m-8 my-10 '
                />
                <img src={wujing}
                    className='xl:h-72 2xl:h-96 h-60
                    rounded-lg w-auto transition-all hover:scale-110 cursor-pointer
                    m-4 mx-8 '
                />
            </div>
            <div className='hidden max-lg:flex justify-center max-lg:py-4'>
                <img src={jtwmb2}
                    className='h-52 md:h-60 max-sm:hidden
                    m-8 my-8'
                />
                <img src={jtwmb}
                    className='sm:max-md:h-52 h-60 
                    sm:mb-8 sm:ml-20'
                    />
            </div>
        </div>
    )
}

export default NewProduct
