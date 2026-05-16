import React from 'react'

import image5 from '../../assets/img/image5.png'
import image6 from '../../assets/img/image6.png'
import image7 from '../../assets/img/image7.png'

import '../../assets/sass/Section3.scss'

const Section3 = () => {
  return (
    <div>

      <div className='section3_wrap'>

        <div className='sec1'>
          <img src={image5} alt="" className='image5' />
          <div className="text1">
            <div className="vision">VISION</div>
            <div className="it">IT 교육 기회를 제공하여 <br/>꿈꾸던 가능성을 열어준다.</div>
            <div className="open">Open up the possibility of dreaming by providing <br/>IT education opportunities.</div>
          </div>
        </div>

        <div className='sec2'>
          <div className="text2">
            <div className="vision">VISION</div>
            <div className="it">IT 기술로 IT 교육의 문제를 <br/>해결한다.</div>
            <div className="solve">Solve IT education problems using IT <br/>technology.</div>
          </div>
          <img src={image6} alt="" className='image6' />
        </div>

        <div className='sec3'>
          <img src={image7} alt="" className='image7' />
          <div className="text3">
            <div className="vision">VISION</div>
            <div className="it">지속 성장이 가능한 IT <br/>커뮤니티를 구축한다.</div>
            <div className="establish">Establish an IT community that can sustain <br/>growth.</div>
          </div>
          
        </div>


      </div>

    </div>
  )
}

export default Section3
