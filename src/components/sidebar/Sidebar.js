import React from 'react'
import '../sidebar/sidebar.css'
import {RssFeed,ChatBubble,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from '@mui/icons-material'
import Closefriend from '../closefriend/Closefriend'
import {postdata} from '../post/PostData'


const sidenavlists = [
    {
        icon: <RssFeed className="sidebaricon"/>,
        title: 'Feed'
    },
    {
        icon: <ChatBubble className="sidebaricon"/>,
        title: 'Chats'
    },
    {
        icon: <PlayCircleFilledOutlined className="sidebaricon"/>,
        title: 'Videos'
    },
    {
        icon: <Group className="sidebaricon"/>,
        title: 'Groups'
    },
    {
        icon: <Bookmark className="sidebaricon"/>,
        title: 'Bookmarks'
    },
    {
        icon: <HelpOutline className="sidebaricon"/>,
        title: 'Questions'
    },
    {
        icon: <WorkOutline className="sidebaricon"/>,
        title: 'Jobs'
    },
    {
        icon: <Event className="sidebaricon"/>,
        title: 'Events'
    },
    {
        icon: <School className="sidebaricon"/>,
        title: 'Courses'
    }
]
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
            {sidenavlists.map(sidenavlist =>
                  <li className="sidebarlistitem">
                {sidenavlist.icon}
                <span className="sidebarlistitemtext">{sidenavlist.title}</span>
            </li>
                )}
        </ul>
        <button className='sidebarbutton'>show more</button>
        <hr className='sidebarhr'/>
        {/* friend list */}
        <ul className="sidebarfriendlist">
            {postdata.map(friendlist =>
               <Closefriend key={friendlist.id} friendlist={friendlist}/>
                )}
            
        </ul>
      </div>
    </div>
  )
}

export default Sidebar