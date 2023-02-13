import './closeFriend.css'
import React from 'react'

export default function CloseFriend({user}) {
    return (
        <div>
             <li className="sidebarFriend">
                    <img className = "sidebarFriendImg" src ="/assets/people/james.jpeg"/>
                    <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}
