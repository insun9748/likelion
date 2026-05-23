import React from 'react'

import '../../assets/sass/Nav.scss'

import logo from '../../assets/img/logo.png'


const Nav = () => {
    return (

        <div className='Nav_wrap'>


            <img src={logo} alt="" className='logo' />


            <ul>
                <li>WOMEN</li>
                <li>MEN</li>
                <li>KIDS</li>
                <li>|</li>
                <li>TENNIS</li>
                <li>BRAND</li>
            </ul>



        </div>


    )
}

export default Nav
