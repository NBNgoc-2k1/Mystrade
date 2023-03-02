import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PropTypes from 'prop-types'

const AppButton = (props: any) => {
    return (
        <div className={`flex justify-around w-fit px-4 my-2 rounded-full
            ${props.disabled ? 'bg-dark-silver cursor-default pointer-events-none' : 'bg-teal cursor-pointer hover:brightness-75'}
            ${props.className}
        `}
            onClick={props.onClick}
        >
            <p className={`text-center my-1.5 sm:my-2.5 first-letter:uppercase text-xl
                ${props.disabled ? 'text-dark-grey' : 'text-white'} 
                ${props.icon ? 'lg:text-2xl' : 'lg:text-xl'} 
            `}
            >{props.content}</p>
            {
                props.icon && (
                    <FontAwesomeIcon icon={props.icon} className={`${props.iconClassName} ml-3 text-xl lg:text-2xl mt-4 ${props.disabled ? 'text-dark-grey' : 'text-white'}`}/>
                )
            }
        </div>
    )
}

AppButton.propTypes = {
    content: PropTypes.string.isRequired,
    icon: PropTypes.object,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default AppButton
