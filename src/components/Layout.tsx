import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import "./style.css";

export const Layout = () => {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <div className="sidebar-main-wrapper">
                    <Sidebar />
                </div>
                <div className="display-wrapper">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
