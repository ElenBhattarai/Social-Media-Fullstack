import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"
import React from "react"

export default function share() {
    return (
        <div className = "share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/people/james.jpeg" className="shareProfileImg"/>
                    <input placeholder="What's on your mind?" className="shareInput" />
                </div>
                <hr className ="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor = "red" className ="shareIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor = "#1877F2"className ="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor ="green" className ="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor = "goldenrod" className ="shareIcon"/>
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className ="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
