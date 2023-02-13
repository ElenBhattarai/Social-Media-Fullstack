import './online.css'
import React from 'react'

export default function Online({user}) {
    return (
        <div>
            <li className = "rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img className = "rightbarProfileImg" src="assets/people/james.jpeg" alt="" />
                    <span className = "rightbarOnline"></span>
                </div>
                <span className = "rightbarUsername">{user.username}</span>
            </li>
        </div>
    )
}
 