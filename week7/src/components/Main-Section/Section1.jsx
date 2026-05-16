import React from 'react'

import image1 from '../../assets/img/image1.png'
import image2 from '../../assets/img/image2.png'
import image3 from '../../assets/img/image3.png'
import image4 from '../../assets/img/image4.png'

import '../../assets/sass/Section1.scss'

const Section1 = () => {
  return (
    <div>
        <div className='section1_wrap'>

            <div className='sec1'>
            <div className='possibility'>POSSIBILITY</div>
            <img src={image1} alt="" className='image1' />
            </div>

            <div className='sec2'>
            <img src={image2} alt="" className='image2' />
            <div className='to'>TO</div>
            <img src={image3} alt="" className='image3' />
            </div>

            <div className='sec3'>
            <div className='reality'>REALITY</div>
            <img src={image4} alt="" className='image4' />
            </div>

            
        </div>
      
    </div>
  )
}

export default Section1
