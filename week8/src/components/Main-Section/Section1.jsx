import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import nav1 from '../../assets/img/nav1.png'
import nav2 from '../../assets/img/nav2.png'
import nav3 from '../../assets/img/nav3.png'
import nav4 from '../../assets/img/nav4.png'
import nav5 from '../../assets/img/nav5.png'

import '../../assets/sass/Section1.scss'

const PrevArrow = ({ onClick }) => (
    <button className="custom_arrow custom_prev" onClick={onClick}>
        <span className="arrow_icon arrow_left" />
    </button>
)

const NextArrow = ({ onClick }) => (
    <button className="custom_arrow custom_next" onClick={onClick}>
        <span className="arrow_icon arrow_right" />
    </button>
)

const Section1 = () => {

    const settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        dots: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }

    const slides = [
        { img: nav1, title: '24 NEW 인터런' },
        { img: nav2, title: '24 NEW 인터런' },
        { img: nav3, title: '24 NEW 인터런' },
        { img: nav4, title: '24 NEW 인터런' },
        { img: nav5, title: '24 NEW 인터런' },
    ]

    return (
      
        <div className='section1_wrap'>

          

            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div className='slide' key={index}>
                        <img src={slide.img} alt="" className='main_img' />
                        <div className='slide_text'>
                            <h2>{slide.title}</h2>
                            <button>자세히 보기</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Section1