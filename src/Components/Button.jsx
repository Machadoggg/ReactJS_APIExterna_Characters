import React from "react";

const Button = ({
    text = "click me", 
    onClick = () => alert("No function")}) => {

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )

};
export default Button;