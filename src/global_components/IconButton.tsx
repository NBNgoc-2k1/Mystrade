import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = (props:any) => {
    return (
        <div className={`rounded-full cursor-pointer ${props.className} hover:brightness-75`} onClick={props.onClick} >
            <FontAwesomeIcon icon={props.icon} className={props.iconClass}/>
        </div>
    )
}

IconButton.propsTypes = {
    icon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired
}

export default IconButton
