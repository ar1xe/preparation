import React from "react";

interface StarProps {
    selected: boolean;
}

const Star = (props: StarProps) => {
    // debugger
    console.log("star");
    if (props.selected) {
        return (
            <span>
        <b> Star </b>
      </span>
        );
    } else return <span> Star </span>;
};

export default Star;
