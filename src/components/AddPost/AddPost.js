import React from 'react'
import './addPost.css';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className="addpost">
        <div className="addpostcontainer">
            <div className="addposttop">
                <img src="/images/user1.jpg" alt="" className="addpostpic" />
                <input placeholder='Whats in your mind..?' type="text" className="addpostinput" />
            </div>
            <hr className='posthr'/>

            <div className="addpostbottom">
                <div className="addpostoptions">
                    <div className="addpostoption">
                    <PhotoSizeSelectActualIcon htmlColor='orange' className="addphoto"/>
                    <span className="addpostoption"> Add a photo</span>

                    </div>

                    <div className="addpostoption">
                    <AddLocationIcon htmlColor='red' className="addphoto"/>
                    <span className="addpostoption"> Add Location</span>
                    
                    </div>

                    <div className="addpostoption">
                    <LocalOfferIcon htmlColor='green' className="addphoto"/>
                    <span className="addpostoption"> Add Tag</span>
                    
                    </div>

                    <div className="addpostoption">
                    <LiveTvIcon htmlColor='red' className="addphoto"/>
                    <span className="addpostoption"> Live</span>
                    
                    </div>
                    

                </div>
                <button className="postbutton">Post</button>

            </div>
        </div>
    </div>
  )
}
