import { faBars, faBasketShopping, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import logo from '../../assets/images/global/logo2.png'
import user from '../../assets/images/global/meditation.png'
import cart from '../../assets/images/global/tote-bag.png'
import IconButton from '../IconButton';
import SearchBar from './sub_components/SearchBar';
import Navigation from './sub_components/Navigation';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { NavLink } from 'react-router-dom';
import Social from '../SocialPart';
import MenuDropdown from './sub_components/MenuDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
    const [openMenuDrawer, setOpenMenuDrawer] = useState(false)
    const [openSearchBar, setOpenSearchBar] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const {authPopup,setAuthPopup} = useAuth()
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}')
    

    const toggleSearchBar = () => {
        setOpenSearchBar(!openSearchBar)
    }

    const handleUserIconClick = () => {
        if (Object.keys(currentUser).length > 0)
            setShowProfileMenu(!showProfileMenu)
        else setAuthPopup({...authPopup,open:true})
    }

    return (
        <header className='sticky top-0 z-20 bg-brown max-xl:py-4'>
            <div className='flex justify-around'>
                <div className='flex lg:absolute'>
                    <IconButton icon={faBars} className='mx-1.5 lg:hidden my-auto'
                        iconClass='text-white text-3xl' onClick={() => setOpenMenuDrawer(true)} />
                    <IconButton icon={faSearch} className='mx-1.5 lg:hidden my-auto'
                        iconClass='text-white text-3xl' onClick={toggleSearchBar} />
                </div>
                <NavLink to='/' className='flex cursor-pointer text-white'>
                    <img src={logo} alt="logo"
                        className="w-16 h-14 mx-auto sm:my-1.5"
                    />
                    <p className={`max-sm:hidden text-2xl my-auto mx-0 select-none`}>
                        Mystrade
                    </p>
                </NavLink>
                <div className='absolute'>
                    <Drawer open={openMenuDrawer} direction='left' onClose={() => setOpenMenuDrawer(false)} >
                        <IconButton icon={faClose} className='relative left-[85%] my-2' iconClass='text-dark-grey text-3xl'
                            onClick={() => setOpenMenuDrawer(false)}
                        />
                        <Navigation className='flex flex-col bg-teal justify-center' isOpenDrawer={openMenuDrawer} />
                        <Social className='bg-teal lg:hidden' />
                    </Drawer>
                </div>
                <Navigation className='hidden lg:flex bg-brown justify-center' />
                <SearchBar className='max-xl:hidden' />
                <div className='flex justify-between'>
                    <IconButton icon={faSearch} className='mx-1.5 hidden lg:max-xl:block my-auto'
                        iconClass='text-white text-3xl' onClick={toggleSearchBar} />
                    <img src={user}
                        className='w-10 h-10 my-auto cursor-pointer'
                        onClick={handleUserIconClick}
                    />
                    <div className='relative text-white ml-2 my-auto cursor-pointer'>
                        {/* <img src={cart}
                            className='w-10 h-10 '
                        /> */}
                        <FontAwesomeIcon icon={faBasketShopping} className='w-8 h-8' />
                        <div className="leading-[100%] p-1 w-auto h-6 text-center absolute bg-teal rounded-xl bottom-4 left-3">
                            99+
                        </div>
                    </div>
                </div>
            </div>
            <SearchBar className={`${!openSearchBar ? 'hidden' : 'xl:hidden'}`} />
            <MenuDropdown open={showProfileMenu} onClose={handleUserIconClick} user={currentUser} />
        </header>
    )
}

export default Header
