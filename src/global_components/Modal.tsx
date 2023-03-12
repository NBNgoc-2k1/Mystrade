import React from 'react'
import PropTypes from 'prop-types'

const Modal = (props:any) => {
    return (
        <div className={`w-full h-screen inset-0 fixed ${props.open ? 'flex' : 'hidden'} z-20 items-center justify-center`}>
            <div className="fixed inset-0 -z-10 bg-dark-grey opacity-60" onClick={props.onClose}></div>
            {props.children}
        </div>
    )
}

Modal.propsTypes = {
    open:PropTypes.bool.isRequired,
    onClose:PropTypes.func.isRequired
}

export default Modal
