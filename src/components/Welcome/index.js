import React from "react";
import './welcome.css';

export default function Welcome(props) {
    return <div>
        <div className="welcome-text">
            <h1>{props.myText}</h1>
        </div>
    </div>
};