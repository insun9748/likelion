import React from 'react'
import heart from '../assets/img/heart.png'
import comment from '../assets/img/comment.png'

const Article = ({title, content}) => {
  return (
    <div>
      <div id="Article_Wrap">
        <div className="article">
            <h1>{title}</h1>

            <p>
                {content}
            </p>

        </div>
        <div className="icon_group">
            <div className="comment">
                <img src={comment} alt="" />
                0
            </div>
            <div className="heart">
                <img src={heart} alt="" />
                1
            </div>
        </div>

        <footer>
            <input type="text" placeholder="댓글을 입력해주세요!"/>
            <button>등록</button>
        </footer>
      </div>
    </div>
  )
}

export default Article
