import React from 'react'
import PropTypes from 'prop-types'
import IconButton from './IconButton'

const TextField = (props: any) => {
    return (
        <div className='relative text-xl my-4'>
            
            <input className="w-full h-10 px-3 rounded-lg border-2 border-placeholder hover:border-dark-grey cursor-text outline-none peer bg-light-silver
                focus:ring-0 focus:border-teal focus:border-[3px]"
                type={props.type}
                placeholder={props.placeholder}
                onChange={(event) => props.onChange(event)}
            />
            <label className={`absolute px-3 text-placeholder mt-1 duration-300 transform left-0 
                peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-brown peer-focus:bg-light-silver
                ${(props.value !== '' || (props.placeholder !== '' && props.placeholder !== undefined)) ? '-translate-y-4 scale-75 bg-light-silver' : ''}
            `}>
                {props.label}
            </label>
            <IconButton icon={props.icon} className='absolute top-1.5 left-[85%]' onClick={props.iconClick} />
        </div>
    )
}

TextField.propsType = {
    'type': PropTypes.string.isRequired,
    'label': PropTypes.string.isRequired,
    'icon': PropTypes.object,
    'iconClick': PropTypes.func,
    'placeholder': PropTypes.string,
    'value':PropTypes.any.isRequired,
    'onChange':PropTypes.func.isRequired,
}

export default TextField
