import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/sass/Nav.scss'

import logo from '../../assets/img/logo.png'


const Nav = () => {
    return (

        <div className='nav_wrap'>

                
                <img src={logo} alt="" className='logo' />
                

                <div className="list">
                    <div className='brand'>브랜드 스토어</div>
                    <div className='info'>서비스 소개</div>
                    <div className='media'>미디어</div>
                    <div className='job'>채용</div>

                </div>
        </div>


    )
}

export default Nav
