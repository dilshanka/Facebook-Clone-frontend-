import React from 'react'
import './rightPane.css';

export default function RightPane() {
  return (
    <div className="rightpanebox">
      <div className="rightpancontainer">
        <div className="addcontainer">
          <span className="sponsered">Sponsored</span>
          <img src="/images/ads.jpg" alt="" className="adimage" />
          <span className="addtext">
            <p>This is an advertisement</p>


          </span>
        </div>

        <div className="birthday">
          <img src="/images/gift.png" alt="" className="birthdayimage" />
          <span className="birthdaytext">
            <b>Glean Maxwell </b> and <b>3 others</b> having birthday today..!

          </span>

        </div>

        <div className="friendlist">
          <li className="onlinefriend">
            <div className="onlinefriendimagecontainer">
              <img src="/images/user1.jpg" alt="" className="onlinefriendimage" />
              <span className="onlinestatus">

              </span>

            </div>

            <span className="onlinefriendname">
              <b>John Doe</b>

            </span>


          </li>

          <li className="onlinefriend">
            <div className="onlinefriendimagecontainer">
              <img src="/images/user2.jpg" alt="" className="onlinefriendimage" />
              <span className="onlinestatus">

              </span>

            </div>

            <span className="onlinefriendname">
              <b>selena gomez</b>

            </span>


          </li>
          <li className="onlinefriend">
            <div className="onlinefriendimagecontainer">
              <img src="/images/user1.jpg" alt="" className="onlinefriendimage" />
              <span className="onlinestatus">

              </span>

            </div>

            <span className="onlinefriendname">
              <b>K.Richardeson</b>

            </span>


          </li> 
          <li className="onlinefriend">
            <div className="onlinefriendimagecontainer">
              <img src="/images/user2.jpg" alt="" className="onlinefriendimage" />
              <span className="onlinestatus">

              </span>

            </div>

            <span className="onlinefriendname">
              <b>Kate </b>

            </span>


          </li>
          <li className="onlinefriend">
            <div className="onlinefriendimagecontainer">
              <img src="/images/user2.jpg" alt="" className="onlinefriendimage" />
              <span className="onlinestatus">

              </span>

            </div>

            <span className="onlinefriendname">
              <b>John Doe</b>

            </span>


          </li>
        </div>




      </div>
    </div>
    
    
  )
}
