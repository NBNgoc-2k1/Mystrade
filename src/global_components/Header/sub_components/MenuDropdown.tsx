import { faArrowRightFromBracket,  faHeart, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import user from '../../../assets/images/global/meditation.png'
const MenuDropdown = (props: any) => {

    const handleBeforeUnload = (e:any) => {
        e.preventDefault();
        const message =
            "Are you sure you want to leave? All provided data will be lost.";
        e.returnValue = message;
        return message;
    };

    const GetAbbreviationUsername = (name:string) => {
        let abbreviationName = ''
        name.split(" ").map(string => abbreviationName += string.charAt(0))
        return abbreviationName
    }


    function stringToColor(string: any) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    return (
        <div className={`${props.open ? 'flex' : 'hidden'} w-full h-screen absolute left-0`}
            onClick={(e) => {
                if (e.currentTarget === e.target) {
                    props.onClose();
                }
            }}
        >
            <div className={` rounded-lg w-64 sm:w-72
                absolute bg-teal top-4 border-2 border-solid border-white
                right-[16vw] sm:right-[14vw] lg:right-[9vw] xl:right-[4vw] 2xl:right-[4.7vw]
            `}>
                <span className="absolute right-3 -top-3"
                    style={{
                        borderLeft: '12px solid transparent',
                        borderRight: "12px solid transparent",
                        borderBottom: '11px solid #ffffff'
                    }}
                >
                    <span className="absolute top-px -right-[0.8rem]"
                        style={{
                            borderLeft: "13px solid transparent",
                            borderRight: "13px solid transparent",
                            borderBottom: "12px solid #649393",
                        }}
                    ></span>
                </span>
                {Object.keys(props.user).length > 0 && <div className="flex pl-2 py-2 border-b-white border-b-2 w-full">
                    <div className={`rounded-full text-white w-10 h-10 items-center justify-center flex uppercase`} 
                        style={{backgroundColor: `${stringToColor(props.user.fullName)}`}}
                    >
                        {GetAbbreviationUsername(props.user.fullName)}
                    </div>
                    <div className="flex flex-col text-base pl-2">
                        <p className="text-white "
                        >{props.user.fullName}</p>
                        <p className="text-white"
                        >{props.user.userEmail}</p>
                    </div>
                </div>}
                <div className="flex max-w-full flex-col ml-4"
                >
                    <div className="flex mt-4"
                    >
                        <img src={user} alt="logo"
                            className="w-6 h-6"
                        />
                        <Link className="text-white text-lg no-underline ml-4 hover:underline underline-offset-4 decoration-2"
                            to='/profile'
                            onClick={(e) => {
                                if (location.pathname === '/add/init')
                                    handleBeforeUnload(e)
                                props.onClose()
                            }}
                        >
                            Edit Profile
                        </Link>
                    </div>
                    <div className="flex my-4"
                    >
                        <FontAwesomeIcon icon={faReceipt} size="xl" color="white" />
                        <Link className="text-white text-lg no-underline ml-5 hover:underline underline-offset-4 decoration-2"
                            to=''
                            onClick={(e) => {
                                if (location.pathname === '/add/init')
                                    handleBeforeUnload(e)
                                props.onClose()
                            }}

                        > My Orders
                        </Link>
                    </div>
                    <div className="flex mb-4"
                    >
                        <FontAwesomeIcon icon={faHeart} size="xl" color="white" />
                        <Link className="text-white text-lg no-underline ml-4 hover:underline underline-offset-4 decoration-2"
                            to=''
                            onClick={(e) => {
                                if (location.pathname === '/add/init')
                                    handleBeforeUnload(e)
                                props.onClose()
                            }}

                        > My Wishlist
                        </Link>
                    </div>
                    <div className="flex mb-4" onClick={() => {
                        window.location.reload()
                    }}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" color="white" />
                        <Link to='' className="text-white text-lg no-underline ml-4 hover:underline underline-offset-4 decoration-2">
                            Log out
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

MenuDropdown.propsType = {
    'open':PropTypes.bool.isRequired,
    'className':PropTypes.string,
    'onClose':PropTypes.func.isRequired,
}


export default MenuDropdown
