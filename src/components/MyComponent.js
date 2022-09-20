import React, {Component} from "react";
import StaticComponent from "./StaticComponent";
class MyComponent extends Component{
    render(h) {
        return(
            <React.Fragment>
                <h2>Welcome to this web, I'm learnig React Js right now!</h2>
                <h3>Testing My Component</h3>
                <StaticComponent></StaticComponent>
            </React.Fragment>
        );
    }
}

export default MyComponent;