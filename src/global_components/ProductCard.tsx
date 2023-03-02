import React, { useState } from 'react'
import demo from '../assets/images/global/logo2.png'
import AppButton from './AppButton'
import IconButton from './IconButton';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faUnHeart } from '@fortawesome/free-regular-svg-icons'
import { currencyFormatter } from '../services';
const ProductCard = () => {
    const [isWish, setWish] = useState(false)
    return (
        <div className='bg-brown pb-2 mx-2 min-[414px]:w-44 sm:w-60 lg:w-64 rounded-xl drop-shadow cursor-pointer'
        >
            <IconButton icon={isWish ? faHeart : faUnHeart}
                className='cursor-pointer absolute left-[85%] top-3'
                iconClass={`text-2xl ${isWish ? 'text-teal' : 'text-dark-grey'}`}
                onClick={() => setWish(!isWish)}
            />
            <div onClick={() => console.log('to detail')}
            >
                <img src={demo}
                    className='h-40 min-[414px]:h-44 sm:h-60 lg:h-64 bg-white rounded-t-xl'
                />
                <div className='text-footer hover:no-underline ml-3'>
                    <p className='py-2 sm:text-xl lg:text-2xl'>Shinto Gate figurine</p>
                    <div className='text-sm sm:text-lg lg:text-xl font-semibold'>
                        {currencyFormatter.format(12.39)}
                    </div>
                </div>
            </div>
            <AppButton content='Add cart' className='max-sm: sm:hidden mx-auto ' />
            <IconButton icon={faCartPlus} className='max-sm:hidden bg-teal h-10 w-10 absolute left-[80%] bottom-1.5'
                iconClass='text-white text-xl mx-2 my-3'
                onClick={() => console.log('to cart')}
            />
        </div>
    )
}

export default ProductCard
