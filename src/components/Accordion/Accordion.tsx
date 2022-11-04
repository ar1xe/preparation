import React from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";

const Accordion = () => {
    const myStyle = {
        border: "2px solid",
        width: "50%",
    };
    console.log("accordion");
    return (
        <div style={myStyle}>
            <h2>Accordion COMPONENT</h2>
            <AccordionHeader title="Accordion HEADER"/>
            <AccordionHeader title="Accordion HEADER2"/>
            <AccordionHeader title="Accordion HEADER3"/>
            <AccordionBody isVisible={true}/>
        </div>
    );
};

export default Accordion;
