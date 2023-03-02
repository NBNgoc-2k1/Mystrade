import React from 'react'
import shopee from '../assets/images/global/shopee.png'
import amazon_logo from '../assets/images/global/amazon.png'
import facebook from '../assets/images/global/facebook.png'
import instagram from '../assets/images/global/instagram.png'
import youtube from '../assets/images/global/youtube.png'

const Social = (props:any) => {
    return (
        <div className={`${props.className} p-2 max-md:border-t max-lg:border-t-2 max-lg:border-white` }>
            <div>
                <p className='text-footer-title'>Social</p>
                <div className='flex'>
                    <a>
                        <img src={facebook}
                            className='h-8 lg:h-10 rounded-lg mr-2 cursor-pointer' />
                    </a>
                    <a>
                        <img src={instagram}
                            className='h-8 lg:h-10 rounded-lg mr-2 cursor-pointer' />
                    </a>
                    <a>
                        <img src={youtube}
                            className='h-8 lg:h-10 rounded-lg mr-2 cursor-pointer' />
                    </a>
                </div>
            </div>
            <div>
                <p className='text-footer-title'>Online Shopping</p>
                <div className='flex'>
                    <a>
                        <img src={shopee}
                            className='h-10 rounded-lg mr-2 cursor-pointer' />
                    </a>
                    <a>
                        <img src={amazon_logo}
                            className='h-10 rounded-lg mr-2 cursor-pointer' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Social
