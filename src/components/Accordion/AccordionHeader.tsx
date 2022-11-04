import React from "react";

interface Props {
    title: string;
}

const AccordionHeader = (props: Props) => {
    console.log("header");
    return <h3>{props.title}</h3>;
};

export default AccordionHeader;
