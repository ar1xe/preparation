import React from "react";
import Star from "./components/Star/Star";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

const App = () => {
    return (
        <div>
            <div>
                <h1>Head component</h1>
            </div>
            <Accordion/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Rating />
        </div>
    );
};

export default App;
