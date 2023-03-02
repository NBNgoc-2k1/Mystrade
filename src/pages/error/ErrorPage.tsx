import React from 'react'
import taiji from '../../assets/images/error/error404.png'
import AppButton from '../../global_components/AppButton'

const ErrorPage = () => {
    return (
        <div className="lg:flex py-6">
            <div className="flex items-center justify-center lg:w-7/12">
                <p className="text-brown text-[10rem] sm:text-[14rem]">4</p>
                <img
                    src={taiji}
                    alt="Taiji"
                    className="max-sm:w-44 m-0"
                />
                <p className="text-brown text-[10rem] sm:text-[14rem]">4</p>
            </div>
            <div className="flex flex-col mx-auto items-baseline justify-center w-3/4 lg:w-5/12">
                <p className="max-lg:hidden text-brown text-3xl xl:text-4xl">SOMETHING WENT WRONG</p>
                <p className="text-lg min-[414px]:text-xl sm:w-3/4
                max-lg:mx-auto max-lg:text-center lg:my-6">
                    We are very sorry for inconvenience.
                    It looks you're trying to access a page that either has been deleted or never been existed.
                </p>
                <AppButton className='max-lg:mx-auto' content="back to home" onClick={() => console.log('')
                } />
            </div>
        </div>
    )
}

export default ErrorPage
