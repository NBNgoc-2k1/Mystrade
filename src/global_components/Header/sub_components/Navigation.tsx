import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '../../IconButton'
import HoverDropdown from './HoverDropdown'
import PropTypes from 'prop-types'

const Navigation = (props: any) => {
    const [openFigureDropdown, setOpenFigureDropdown] = useState(false)
    const [openBookDropdown, setOpenBookDropdown] = useState(false)
    const [openAccessoryDropdown, setOpenAccessoryDropdown] = useState(false)

    useEffect(() => {
        setOpenFigureDropdown(false)
        setOpenBookDropdown(false)
        setOpenAccessoryDropdown(false)
    }, [props.isOpenDrawer])

    const categoryData = {
        figurines: [
            { title: 'gods', path: '/category/figurine/god' },
            { title: 'creatures', path: '/category/figurine/creatures' },
            { title: 'items', path: '/category/figurine/' }
        ],
        books: [
            { title: 'Notebook', path: '/category/books/notebook' },
            { title: 'Novel', path: '/category/books/novel' },

        ],
        accessories: [
            { title: 'Key chain', path: '/category/accessories/keyChain' },
            { title: 'Backpack - Wallet', path: '/category/accessories/bag' },
            { title: 'Necklace', path: '/category/accessories/necklace' },
        ]
    }

    return (
        <div className={`bg-brown justify-center ${props.className}`}>
            <div className='group relative border-none max-lg:border-b border-b-2 border-white'>
                <div className='flex'>
                    <NavLink to='/category/figures'
                        className={`${(location.pathname === '/category/books') && 'bg-teal'} 
                        nav-item
                `}>
                        Figurines
                    </NavLink>
                    <IconButton icon={openFigureDropdown ? faChevronUp : faChevronDown}
                        className={`text-white my-auto lg:hidden`}
                        onClick={() => setOpenFigureDropdown(!openFigureDropdown)}
                    />
                </div>
                <HoverDropdown data={categoryData.figurines} open={openFigureDropdown}
                    className='bg-white text-dark-grey'
                />
            </div>
            <div className='group relative border-none max-lg:border-b border-b-2 border-white'>
                <div className='flex'>
                    <NavLink to='/category/books'
                        className={`${(location.pathname === '/category/books') && 'bg-teal'} 
                    nav-item
                `}>
                        Books
                    </NavLink>
                    <IconButton icon={openBookDropdown ? faChevronUp : faChevronDown}
                        className={`text-white my-auto lg:hidden`}
                        onClick={() => setOpenBookDropdown(!openBookDropdown)}
                    />
                </div>
                <HoverDropdown data={categoryData.books} open={openBookDropdown}
                    className='bg-white text-dark-grey'

                />
            </div>
            <div className='group relative border-none max-lg:border-b border-b-2 border-white'>
                <div className='flex'>
                    <NavLink to='/category/accessories'
                        className={`${(location.pathname === '/category/books') && 'bg-teal'} 
                    nav-item
                    `}>
                        Accessories
                    </NavLink>
                    <IconButton icon={openAccessoryDropdown ? faChevronUp : faChevronDown}
                        className={`text-white my-auto lg:hidden`}
                        onClick={() => setOpenAccessoryDropdown(!openAccessoryDropdown)}
                    />
                </div>
                <HoverDropdown data={categoryData.accessories} open={openAccessoryDropdown}
                    className='bg-white text-dark-grey'

                />
            </div>
        </div>

    )
}

Navigation.propsType = {
    'isOpenDrawer':PropTypes.bool,
    'className':PropTypes.string,
}

export default Navigation
