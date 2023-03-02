import React from 'react'
import PropTypes from 'prop-types'

const HoverDropdown = (props: any) => {
    return (
        <>
            <div className={`lg:hidden group-hover:flex hover:flex
                flex-col lg:absolute text-lg w-full lg:w-40 drop-shadow-lg left-4
                ${props.open ? 'flex' : 'hidden'} ${props.className}
            `}>
                {
                    props.data.length > 0 ? props.data.map((data: any) =>
                        <a href={data.path} className='max-lg:px-6 p-2 capitalize hover:text-white hover:bg-teal
                            border-b border-b-2 border-dark-silver
                        ' >{data.title}</a>
                    ) : (
                        <></>
                    )
                }
            </div>
        </>
    )
}

HoverDropdown.propsType = {
    'open':PropTypes.bool.isRequired,
    'className':PropTypes.string,
    'data':PropTypes.array.isRequired,
}


export default HoverDropdown
