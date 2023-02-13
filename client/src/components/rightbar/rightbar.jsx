import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"
import React from "react"

export default function rightbar({user}) {
    const HomeRightBar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img src="assets/people/cake.png" className="birthdayImg" alt="" />
                    <span className="birthdayText"> <b>James Hanselman</b> and <b>3 others</b> have birthdays today.</span>
                </div>
                <img src="assets/people/nepali-village.jpeg" alt="" className="rightbarAd" />
                <h4 className = "rightbarTitle">Online friends</h4>
                <ul className = "rightbarFriendList">
                    {Users.map((u=> (
                        <Online key = {u.id} user = {u} />
                    )))}
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship == 1? "Single": user.relationship == 2? "Married" : "" }</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/people/nepali-village.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/nepali-village.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/nepali-village.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/nepali-village.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/nepali-village.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/nepali-village.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

            </>
        )
    }

    return (
        
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar/> : <HomeRightBar />}
            </div>
        </div>
    )
}
