import React from 'react'
import '../../assets/sass/Section4.scss'

const Section4 = () => {
  return (
    <div className='section4_wrap'>
        <div className='title'>CORE-VALUES</div>
        <div className='title2'>GROUND-RULES</div>

        <div className='circle_wrap'>
            <div className='circle'>
                <div className='circle_title'>Commitiment</div>
                <div className='circle_content'>
                    <div>정직 : Honesty</div>
                    <div>존중 : Respect</div>
                    <div>신뢰 : Trust</div>
                </div>
            </div>
            <div className='circle'>
                <div className='circle_title'>Challenge</div>
                <div className='circle_content orange'>
                    <div>개척 : Pioneer</div>
                    <div>집착 : Obsession</div>
                    <div className='black'>탁월 : Excellence</div>
                </div>
            </div>
            <div className='circle'>
                <div className='circle_title'>Companionship</div>
                <div className='circle_content'>
                    <div>다양성 : Diversity</div>
                    <div>배려 : Consideration</div>
                    <div>소통 : Communication</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4