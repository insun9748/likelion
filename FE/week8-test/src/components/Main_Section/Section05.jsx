import React from 'react'
import section05_1 from '../../assets/img/section04_1.png'
import section05_2 from '../../assets/img/section04_2.png'
import section05_3 from '../../assets/img/section04_3.png'
import section05_4 from '../../assets/img/section04_4.png'

const cards = [
  {
    img: section05_1,
    title: '"비즈니스 문제 해커톤으로 해결"...멋쟁이사자처럼, 기업 해커톤 출시',
    text: '정보기술(IT) 교육 기업 멋쟁이사자처럼(멋사)은 31일부터 해커톤 참가자들을 통해 기업이 가진 비즈니스 문제를...',
    info: '머니S | 2023.10.31',
  },
  {
    img: section05_2,
    title: "P2E '실타래', 편의성 강화해 진입 장벽 낮춘다",
    text: '멋쟁이사자처럼은 메타굴즈뿐 아니라 여러 갈래의 대체불가토큰(NFT) 사업을 펼쳤다. 멋쟁이사자처럼 산하 블록...',
    info: '더벨 | 2023.01.27',
  },
  {
    img: section05_3,
    title: '콘크릿, 글로벌 아티스트 톰 삭스와 이태원 전역에서 보물찾기 진행',
    text: "현대카드와 멋쟁이사자처럼의 합작법인 모던라이언이 운영하는 NFT 마켓플레이스 'KONKRIT(이하 콘크릿)'이...",
    info: '경향게임스 | 2023.09.13',
  },
  {
    img: section05_4,
    title: "멋쟁이사자처럼, 아트 NFT·실물 연계 '퀴드해시' 프로젝트 띄운다",
    text: '멋쟁이사자처럼이 아트NFT와 실물을 연계한 대체불가토큰(NFT) 프로젝트 퀴드해시를 추진한다.',
    info: '디지털투데이 | 2023.09.27',
  },
]

const Section05 = () => {
  return (
    <div className="Section05_wrap">
      <div className="header">
        <h3>LIKELION MEDIA</h3>
        <h1>언론 속의 LIKELION</h1>
      </div>
      <div className="main">
        {cards.map((card, i) => (
          <div key={i}>
            <img src={card.img} alt={card.title} style={{ width: '100%' }} />
            <div>
              <h3>{card.title}</h3>
              <p className="text">{card.text}</p>
              <p className="info">{card.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section05
