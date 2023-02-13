import "./feed.css"

import Share from "../share/share.jsx"
import Post from "../post/Post.jsx" 
import axios from "axios"
import React from 'react'
import { useState,useEffect } from "react"

export default function Feed({username}) {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = username
                        ? await axios.get("/posts/profile/"+username)
                        : await axios.get("/posts/timeline/622ae22913d143a5385cc625")
            setPosts(res.data) 
        }   
        fetchData()
    },[])


    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => (
                    <Post key = {p._id} post = {p}/>
                ))}
            </div>
        </div>
    )
}
