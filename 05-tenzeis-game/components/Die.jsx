import React from "react";

function Die(props) {
    const myStyle = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    };
    return (<button
        onClick={props.hold}
        style={myStyle}
        aria-pressed={props.isHeld}
        aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"} `}
    >{props.value}
    </button>
    );
}

export default Die;
