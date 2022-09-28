import React from "react";

const SliderComponent = (props) =>{
    const text = props.section == "articles" ? 'Articles List' 
    : props.section == 'form' ?  'Form View' 
    : props.section == 'about' ?  'About Us' : 'React Course';
    return(
        <div id="slider" className="slider-big">
            <h1>{text}</h1>
            <a href="/" className="btn-white">Go to My Github</a>
        </div>
    );
}
export default SliderComponent;