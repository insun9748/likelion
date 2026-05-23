import React from 'react'
import '../../assets/sass/Footer.scss'
import logo from '../../assets/img/logo2.png'

const Footer = () => {
    return (
        <footer className="footer_wrap">
            <div className="footer_logo">
                <img src={logo} alt="FILA" />
            </div>

            <div className="footer_content">
                <div className="footer_top">
                    <nav className="footer_nav">
                        <span>매장안내</span>
                        <span className="divider">|</span>
                        <span>공지사항</span>
                        <span className="divider">|</span>
                        <span>FILA MEMBERSHIP</span>
                        <span className="divider">|</span>
                        <span>단체 판매</span>
                        <span className="divider">|</span>
                        <span>대리점 개설문의</span>
                        <span className="divider">|</span>
                        <span>FILA 입찰 참여 안내</span>
                    </nav>

                    <div className="cs_center">
                        <button className="cs_btn">CS CENTER</button>
                    </div>
                </div>

                <div className="footer_middle">
                    <div className="footer_info">
                        <p>서울특별시 성북구 보문로 35 휠라코리아(주)&nbsp;&nbsp;대표이사 : 김지헌</p>
                        <p>
                            사업자등록번호 : 716-81-01573&nbsp;
                            <span className="link">사업자정보확인</span>&nbsp;&nbsp;
                            통신판매업신고 : 제 2020-서울강동-0160 호
                        </p>
                        <p>개인정보 관리책임자 : 이학우</p>
                        <br />
                        <p>본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.</p>
                        <p>콘텐츠산업진흥법에 의한 콘텐츠보호안내 <span className="link">자세히 보기</span></p>
                    </div>

                    <div className="cs_info">
                        <p className="cs_phone">1577-3472</p>
                        <p className="cs_email">filaonline@fila.com</p>
                        <p className="cs_hours">평일 월 - 금 : 09시 - 18시 (공휴일 제외)</p>
                    </div>
                </div>

                <div className="footer_bottom">
                    <div className="footer_links">
                        <span>통합회원 이용약관</span>
                        <span className="divider">|</span>
                        <span>개인정보 처리방침</span>
                        <span className="divider">|</span>
                        <span>제보센터</span>
                    </div>

                    <div className="footer_region">
                        <span>🇰🇷 KOREA</span>
                        <span className="family_site">FAMILY SITE ▲</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
