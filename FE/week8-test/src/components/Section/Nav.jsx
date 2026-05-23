import React from 'react'
import likelion_logo from '../../assets/img/likelion_w_logo.svg'
import '../../assets/sass/section/_mainsection.scss'

const Nav = () => {
    return (

        <div className='Nav_wrap'>


            <img src={likelion_logo} alt="" className='logo' />


            <ul>
                <li>브랜드 스토어</li>
                <li>서비스 소개</li>
                <li>미디어</li>
                <li>채용</li>

            </ul>


        </div>

    )
}
export default Nav
