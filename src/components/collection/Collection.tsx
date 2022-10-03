import React from "react";
import "./collection.css";
import { AiFillBell, AiFillHome } from "react-icons/ai";
import { BsFillTrashFill, BsFillCollectionFill } from "react-icons/bs";
import { GrSort } from "react-icons/gr";
// import dummy_pic from "./dummy_pic.jpeg";

export const Collection = () => {
    return (
        <div className="collection-wrapper">
            <div className="top-bar">
                <AiFillBell />
                <AiFillHome />
            </div>
            <div className="menu-bar">
                <p>Collection</p>
                <div className="collection-modifiers">
                    <BsFillTrashFill />
                    <BsFillCollectionFill />
                    <GrSort />
                </div>
            </div>
            <div className="explorer">
                <div className="card-wrapper">
                    <img src="dummy_pic.jpeg" />
                    <p>Test</p>
                </div>

                <div className="card-wrapper">
                    <img src="dummy_pic.jpeg" />
                    <p>Test</p>
                </div>

                <div className="card-wrapper">
                    <img src="dummy_pic.jpeg" />
                    <p>Test</p>
                </div>

                <div className="card-wrapper">
                    <img src="dummy_pic.jpeg" />
                    <p>Test</p>
                </div>

                <div className="card-wrapper">
                    <img src="dummy_pic.jpeg" />
                    <p>Test</p>
                </div>

                <div className="card-wrapper">
                    <img src="dummy_pic.jpeg" />
                    <p>Test</p>
                </div>

                <div className="card-wrapper">
                    <img src="dummy_pic.jpeg" />
                    <p>Test</p>
                </div>
            </div>
        </div>
    );
};
