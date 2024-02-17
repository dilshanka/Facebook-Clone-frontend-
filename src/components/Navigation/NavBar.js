import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import './navBar.css';

export default function NavBar() {
  return (
    <div className='navbarbox'>


      <div className="navBarLeft">
        <span className="logo">Facebook</span>
      </div>


      <div className="navBarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>


      <div className="navBarRight">
        
        < div className="navBarLinks">

          <span className="navBarLink">Homepage</span>
          
          </div>

        <div className="navBarIcons">
          <PersonIcon/>
          <span className='iconBadge'>1</span>
          </div>
          <div className="navBarIcons">
          <MessageIcon/>
          <span className='iconBadge'>4</span>
          </div>
          <div className="navBarIcons">
          <SettingsIcon/>
          <span className='iconBadge'>3</span>
          </div>
      </div>

     



      

      <div className='picture'>
        <img src="/images/user1.jpg" alt='' className='profilepicimg'   />
        </div>











    </div>
  )
}
