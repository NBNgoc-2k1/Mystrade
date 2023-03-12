import React from 'react'
import taiji from '../assets/images/global/taiji.png'

const TitlePage = (props: any) => {
    return (
        <div className={`${props.className} place-content-center items-center flex mb-8`}>
            <img src={taiji}
                className='w-10 lg:w-14'
            />
            <p className='mx-4 text-center'>{props.title}</p>
            <img src={taiji}
                className='w-10 lg:w-14'
                />
        </div>
    )
}



export default TitlePage
