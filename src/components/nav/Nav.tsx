import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { BsFillCollectionFill, BsEye } from "react-icons/bs";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <BsFillCollectionFill />
                        <span>Collection</span>
                    </Link>
                </li>
                <li>
                    <Link to="/blogs">
                        <BsEye />
                        <span>Overview</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <TbActivityHeartbeat />
                        <span>Status</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <FiSettings />
                        <span>Setting</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <CgProfile />
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
