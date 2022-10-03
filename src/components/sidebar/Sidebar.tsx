import React from "react";
import { Nav } from "../nav/Nav";
import "./sidebar.css";

export const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <input type={"text"} placeholder="search" id="search-input" />
            <Nav />
            <p>Metamask login mockup</p>
        </div>
    );
};
