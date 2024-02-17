import React from 'react'
import './post.css';

export default function Post() {
  return (
    <div className="post">
    <div className="postcontainer">
        <div className="posttop">
            <img src="/images/user2.jpg" alt="" className="postimage" />
            <span className="postusername">Selena gomez</span>
            <span className="posttime">10 minutes ago</span>
        </div>
        <div className="postcenter">
            <div className="postcaption">
                <p>Hey there, this is a post</p>

            </div>
            <img src="/images/car.jpg" alt="" className="postedimage" />
        </div>
        <div className="postbottom">
        <div className="postbottomleft">
            <img src="/images/like.png" alt="" className="icon" />
            <img src="/images/heart.jpg" alt="" className="icon" />
            <img src="/images/hahah.png" alt="" className="icon" />
            <span className="likecount">32 people liked this</span>
        </div>
        <div className="postbottomright">
            <span className="commentcount">
                15 comments

            </span>
        </div>

    </div>
    </div>
    </div>
    
  )
}
