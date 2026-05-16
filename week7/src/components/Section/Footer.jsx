import React from 'react'
import '../../assets/sass/Footer.scss'
import logo3 from '../../assets/img/logo3.png'

import insta from '../../assets/img/insta.png'
import youtube from '../../assets/img/youtube.png'
import logo2 from '../../assets/img/logo2.png'

const Footer = () => {
  return (
    <div className='footer_wrap'>
      <div className='left'>
        <img src={logo3} alt="" className='logo3' />

        <div className='info'>
          <p>(주)멋쟁이사자처럼 | 대표이사 나성영</p>
          <p>서울특별시 종로구 종로3길 17 D타워, 16-17층</p>
          <p>사업자 번호 : 264-88-01106</p>
          <p>통신판매업 신고번호 : 2022-서울종로-1534</p>
          <p>✉ 문의처 contact@likelion.net</p>
        </div>

        <div className='social'>
          <div className='icon'><img src={insta} alt="" /></div>
          <div className='icon'><img src={youtube} alt="" /></div>
          <div className='icon'><img src={logo2} alt="" /></div>
        </div>
      </div>


      <div className='right'>
        <div className='col'>
          <div className='col_title'>FAMILY BRAND</div>
          <div className='col_item'>TECHIT</div>
          <div className='col_item'>SYLTARE</div>
          <div className='col_item'>MODERN LION</div>
          <div className='col_item'>QUADHASH</div>
        </div>

        <div className='col'>
          <div className='col_title'>POLICY</div>
          <div className='col_item'>이용약관</div>
          <div className='col_item'>개인정보처리방침</div>
          <div className='col_item'>Nonprofit Report ↓</div>
          <div className='col_item'>국민권익위원회</div>
        </div>
        
        <div className='col'>
          <div className='col_title'>RESOURCE</div>
          <div className='col_item'>로고 가이드라인 ↓</div>
        </div>
      </div>
    </div>
  )
}

export default Footer