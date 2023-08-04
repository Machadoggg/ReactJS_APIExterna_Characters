import React from "react";

const Title = ({ text = "texto por default" }) => {

    return (
        <h1>
            {text}
        </h1>
    )

};
export default Title;