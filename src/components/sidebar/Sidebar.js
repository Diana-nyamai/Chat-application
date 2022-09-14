import React from 'react'
import '../sidebar/sidebar.css'
import {RssFeed,ChatBubble,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from '@mui/icons-material'
import Closefriend from '../closefriend/Closefriend'
import {postdata} from '../post/PostData'


const sidenavlists = [
    {
        id: 1,
        icon: <RssFeed className="sidebaricon"/>,
        title: 'Feed'
    },
    {
        id: 2,
        icon: <ChatBubble className="sidebaricon"/>,
        title: 'Chats'
    },
    {
        id: 3,
        icon: <PlayCircleFilledOutlined className="sidebaricon"/>,
        title: 'Videos'
    },
    {
        id: 4,
        icon: <Group className="sidebaricon"/>,
        title: 'Groups'
    },
    {
        id: 5,
        icon: <Bookmark className="sidebaricon"/>,
        title: 'Bookmarks'
    },
    {
        id: 6,
        icon: <HelpOutline className="sidebaricon"/>,
        title: 'Questions'
    },
    {
        id: 7,
        icon: <WorkOutline className="sidebaricon"/>,
        title: 'Jobs'
    },
    {
        id: 8,
        icon: <Event className="sidebaricon"/>,
        title: 'Events'
    },
    {
        id: 9,
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
            <li key={sidenavlist.id} className="sidebarlistitem">
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