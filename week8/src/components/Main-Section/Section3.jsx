import React from 'react'
import '../../assets/sass/Section3.scss'

import main8 from '../../assets/img/main8.png'
import main9 from '../../assets/img/main9.png'


const Section3 = () => {
    return (

        <div className="Section3_wrap">
            <div className="content1">기획전</div>

            <div className="sec_wrap">
                <div className="sec1">
                    <img src={main8} alt="" className='main8' />
                    <div className="content">FILA CUSTOM STUDIO</div>
                    <div className="sub">최상의 플레이를 위한 맞춤형 테니스화</div>
                    <button>자세히 보기</button>
                </div>

                <div className="sec2">
                    <img src={main9} alt="" className='main9' />
                    <div className="content">Pertex Life</div>
                    <div className="sub">휠라 퍼텍스 시리즈와 함께하는 퍼텍스 라이프</div>
                    <button>자세히 보기</button>
                </div>
            </div>

        </div>

    )
}

export default Section3
