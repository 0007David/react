import React from "react";

function Die(props) {
    const myStyle = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    };
    return (
        <button
            onClick={props.hold}
            style={myStyle}>
            {props.value}
        </button>
    );
}

export default Die;
