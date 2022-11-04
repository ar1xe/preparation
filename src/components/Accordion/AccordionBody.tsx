import React from "react";
import Star from "../Star/Star";

interface AccordionBodyProp {
    isVisible: boolean
}

const AccordionBody = (props: AccordionBodyProp) => {
    // console.log("body")

    if (props.isVisible) {
        return (
            <div>
                Accordion BODY
                <ul>
                    Accordion LIST
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                </ul>
                <Star selected={true}/>
            </div>
        )
    } else {
        return (
            <div>
                Accordion BODY
            </div>
        )
    }

};

export default AccordionBody;
