import React from 'react'
import '../../assets/sass/Section4.scss'

import insta1 from '../../assets/img/insta1.png'
import insta2 from '../../assets/img/insta2.png'
import insta3 from '../../assets/img/insta3.png'
import insta4 from '../../assets/img/insta4.png'
import insta5 from '../../assets/img/insta5.png'
import insta6 from '../../assets/img/insta6.png'
import insta7 from '../../assets/img/insta7.png'
import insta8 from '../../assets/img/insta8.png'
import insta9 from '../../assets/img/insta9.png'
import insta10 from '../../assets/img/insta10.png'

const images = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8, insta9, insta10]

const Section4 = () => {
    return (
        <div className="Section4_wrap">
            <p className="insta_handle">@fila_korea</p>
            <div className="insta_grid">
                {images.map((img, i) => (
                    <div key={i} className="insta_item">
                        <img src={img} alt={`insta${i + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section4
