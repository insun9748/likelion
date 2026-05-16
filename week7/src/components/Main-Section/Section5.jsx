import React from 'react'

import image8 from '../../assets/img/image8.png'
import image9 from '../../assets/img/image9.png'
import image10 from '../../assets/img/image10.png'
import image11 from '../../assets/img/image11.png'

import '../../assets/sass/Section5.scss'

const Section5 = () => {
  return (
    <div>
      <div className='section5_wrap'>

        <div className='text'>
        <div className='media'>LIKELION MEDIA</div>
        <div className='media2'>언론 속의 LIKELION</div>
        </div>

        <div className='sec_wrap'>
        <div className='sec1'>
          <img src={image8} alt="" className='image8' />
          <div className="text">
            <div className="head">“비즈니스 문제 해커톤으로 해<br />결”…멋쟁이사자처럼, 기업 해커톤<br />출시</div>
            <div className="content">정보기술(IT) 교육 기업 멋쟁이사자처<br />럼(멋사)은 31일부터 해커톤 참가자들<br />을 통해 기업이 가진 비즈니스 문제를...</div>
            <div className="date">머니S | 2023.10.31</div>
          </div>
        </div>

        <div className='sec2'>
          <img src={image9} alt="" className='image9' />
          <div className="text">
            <div className="head">P2E ‘실타래‘, 편의성 강화해 진입 <br />장벽 낮춘다</div>
            <div className="content">멋쟁이사자처럼은 메타콩즈뿐 아니라 <br />여러 갈래의 대체불가토큰(NFT) 사업<br />을 펼쳤다. 멋쟁이사자처럼 산하 블록...</div>
            <div className="date">더별 | 2023.01.27</div>
          </div>
        </div>

        <div className='sec3'>
          <img src={image10} alt="" className='image10' />
          <div className="text">
            <div className="head">콘크릿, 글로벌 아티스트 톰 삭스와 <br />이태원 전역에서 보물찾기 진행</div>
            <div className="content">현대카드와 멋쟁이사자처럼의 합작법<br />인 모던라이언이 운영하는 NFT 마켓플<br />레이스 ‘KONKRIT(이하 콘크릿)’이...</div>
            <div className="date">경향게임스 | 2023.09.13</div>
          </div>
        </div>

        <div className='sec4'>
          <img src={image11} alt="" className='image11' />
          <div className="text">
            <div className="head">멋쟁이사자처럼, 아트 NFT·실물<br /> 연계 ‘쿼드해시‘ 프로젝트 띄운다</div>
            <div className="content">멋쟁이사자처럼이 아트NFT와 실물을<br />연계한 대체불가토큰(NFT) 프로젝트 <br />쿼드해시를 추진한다.</div>
            <div className="date">디지털투데이 | 2023.09.27</div>
          </div>
        </div>
        </div>



      </div>
    </div>
  )
}

export default Section5
