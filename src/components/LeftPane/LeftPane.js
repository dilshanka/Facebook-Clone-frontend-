import React from 'react'
import './leftPane.css';
import MessageIcon from '@mui/icons-material/Message';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import BuildIcon from '@mui/icons-material/Build';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlagIcon from '@mui/icons-material/Flag';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupIcon from '@mui/icons-material/Group';


export default function LeftPane() {
  return (
    <div className='leftpanebox'>
        <div className="leftpanecontainer">
            <div className="leftpanemenu">
                <li className="leftpanemenuitem">
                    <MessageIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>Messages</span>

                </li>
                <li className="leftpanemenuitem">
                    <GroupIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>Group</span>

                </li>
                <li className="leftpanemenuitem">
                    <RssFeedIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>Feed</span>

                </li>
                <li className="leftpanemenuitem">
                    <CalendarMonthIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>Calander</span>

                </li>

                <li className="leftpanemenuitem">
                    <BuildIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>Build</span>

                </li>
                <li className="leftpanemenuitem">
                    <SportsBasketballIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>Sports</span>

                </li>
                <li className="leftpanemenuitem">
                    <NewspaperIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>News</span>

                </li>
                <li className="leftpanemenuitem">
                    <WorkOutlineIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>workout</span>

                </li>
                <li className="leftpanemenuitem">
                    <AddShoppingCartIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>Cart</span>

                </li>
                <li className="leftpanemenuitem">
                    <FlagIcon className='leftpanemenuicon'/>
                    <span className='leftpanemenutext'>Pages</span>

                </li>
                <hr/>
                <div className="pagesyouliked">
                    <h3>Pages you liked</h3>
                </div>
                <li className="pagelistitem">
                    <img src="/images/bbc.png" alt="" className="pagepic" />
                    <span className="pagename">CNN News</span>
                </li>
                <li className="pagelistitem">
                    <img src="/images/inst.jpg" alt="" className="pagepic" />
                    <span className="pagename">Instagram</span>
                </li>
                <li className="pagelistitem">
                    <img src="/images/you.png" alt="" className="pagepic" />
                    <span className="pagename">Youtube</span>
                </li>

            </div>

        </div>
    </div>
  )
}
