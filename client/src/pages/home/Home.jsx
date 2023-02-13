import Sidebar from "../../components/sidebar/sidebar.jsx"
import Topbar from "../../components/topbar/topbar.jsx"
import Rightbar from "../../components/rightbar/rightbar.jsx"
import Feed from "../../components/feed/Feed.jsx"
import React from "react"

import "./home.css"

export default function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}
