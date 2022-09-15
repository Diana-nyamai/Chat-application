import React from 'react'
import './profile.css'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

function Profile() {
  return (
   <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileright">
                <div className="profilerighttop">
                    {/* profile cover */}
                  <div className="profilecover">
                    <img src="../assets/post/post5.jpg" alt="" className="profilecoverimg"/>
                    <img src="../assets/person/p1.jpg" alt="" className="profileuserimg"/>
                  </div>
                  <div className="profileinfo">
                    <h4 className="profileinfoname">deedee nyamai</h4>
                    <span className="profileinfodesc">I am a frontend developer</span>
                  </div>
                </div>

                {/* feed and rightbar*/}
                <div className="profilerightbottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
   </>
  )
}

export default Profile