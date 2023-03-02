import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faChevronUp, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import logo from '../assets/images/global/logo2.png'
import IconButton from './IconButton'
import Social from './SocialPart'

const Footer = () => {
    const [openSupportInfo, setOpenSupportInfo] = useState(false)

    return (
        <div className='bg-dark-grey'>
            <div className="flex flex-row items-center md:items-start justify-around py-4
                max-sm:flex-col-reverse max-md:px-10
            ">
                <div className='sm:w-72'>
                    <div className='flex'>
                        <img src={logo} alt="logo"
                            className="w-16 h-14 my-1.5"
                        />
                        <p className='text-footer-title my-auto'>
                            Mystrade
                        </p>
                    </div>
                    <div>
                        <p className='text-footer cursor-default hover:no-underline'><strong>Address:</strong> 28/12 Nguyen Hoang, Thu Duc City, Ho Chi Minh City, Vietnam</p>
                        <p className='text-footer cursor-default hover:no-underline'><strong>Hotline:</strong> 03642 834 371</p>
                        <p className='text-footer cursor-default normal-case hover:no-underline'><strong>Email:</strong> mythworld@gmail.com</p>
                    </div>
                </div>
                <div className='w-full sm:hidden'>
                    <div className='flex justify-between'>
                        <p className='text-footer-title uppercase'>support</p>
                        <IconButton icon={openSupportInfo ? faChevronUp : faChevronDown}
                            className={`text-white my-auto lg:hidden`}
                            onClick={() => setOpenSupportInfo(!openSupportInfo)}
                        />
                    </div>
                    <div className={`${openSupportInfo ? 'flex' : 'hidden'} flex-col`}>
                        <a className='text-footer'>Checking Order</a>
                        <a className='text-footer'>Delivery Method</a>
                        <a className='text-footer'>Checkout Method</a>
                        <a className='text-footer'>Return Policy</a>
                    </div>
                </div>
                <Social className='max-lg:hidden' />
                <div className='max-sm:hidden'>
                    <p className='text-footer-title uppercase'>support</p>
                    <div className='flex flex-col'>
                        <a className='text-footer'>Checking Order</a>
                        <a className='text-footer'>Delivery Method</a>
                        <a className='text-footer'>Checkout Method</a>
                        <a className='text-footer'>Return Policy</a>
                    </div>
                </div>
            </div>
            <div className='flex max-sm:flex-col justify-center mx-2 pb-6'>
                <p className='text-footer cursor-default hover:no-underline text-center'>Copyright
                    <FontAwesomeIcon icon={faCopyright} className='mx-2' />
                    2023 All rights reserved.
                </p>
                <a className='text-footer text-center ml-2'>
                    Powered by Ngoc Kidou
                </a>
            </div>
        </div>
    )
}

export default Footer
