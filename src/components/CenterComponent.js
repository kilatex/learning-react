import React from "react";
import ContentComponent from "./ContentComponent";
import FormComponent from "./FormComponent";
import SidebarComponent from "./SidebarComponent";

const CenterComponent = (props) => {
    let section;
    switch (props.section) {
        case 'articles':
            section = (<ContentComponent />);
            break;
        case 'form':
            section = (<FormComponent />)
            break;
        default:
            section = (<ContentComponent />);
            break;
    }
    return (
        <div className="center">
            {section}
            <SidebarComponent />
            <div className="clearfix"></div>
        </div>
    );
}

export default CenterComponent;