import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../assets/sass/Section2.scss'

import main1 from '../../assets/img/main1.png'
import main2 from '../../assets/img/main2.png'
import main3 from '../../assets/img/main3.png'
import main4 from '../../assets/img/main4.png'
import main5 from '../../assets/img/main5.png'
import main6 from '../../assets/img/main6.png'
import main7 from '../../assets/img/main7.png'

const products = [
    { id: 1, img: main1, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { id: 2, img: main2, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { id: 3, img: main3, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { id: 4, img: main4, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { id: 5, img: main5, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { id: 6, img: main6, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { id: 7, img: main7, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
]

const tags = ['# 냉감티셔츠', '# 에샤페', '# 반팔티셔츠', '# 페이토&샌들', '# 인터런']

const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
}

const Section2 = () => {
    const [activeTag, setActiveTag] = useState(0)

    return (
        <div className="Section2_wrap">
            <h2 className="section2_title">지금 많이 찾는 상품</h2>

            <div className="tag_list">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className={`tag ${activeTag === i ? 'active' : ''}`}
                        onClick={() => setActiveTag(i)}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="slider_wrap">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className="product_card">
                            <div className="img_wrap">
                                <img src={product.img} alt={product.name} />
                                <button className="heart_btn">♡</button>
                            </div>
                            <div className="product_info">
                                <p className="category">{product.category}</p>
                                <p className="product_name">{product.name}</p>
                                <p className="price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Section2
