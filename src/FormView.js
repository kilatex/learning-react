import React,{Component} from "react";
import FooterComponent from "./components/FooterComponent";
import FormComponent from "./components/FormComponent";
import HeaderComponent from "./components/HeaderComponent";
import SliderComponent from "./components/SliderComponent";

class FormView extends Component{
    render(){
        return(
            <>
            <HeaderComponent/>
            <SliderComponent/>
            <FormComponent/>
            <FooterComponent/>
            </>
        );
    }
}

export default FormView;