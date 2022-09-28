import React from "react";
import AboutUsComponent from "./AboutUsComponent";
import ContentComponent from "./ContentComponent";
import FormComponent from "./FormComponent";
import SidebarComponent from "./SidebarComponent";

const CenterComponent = (props) => {
    let section;
    switch (props.section) {
        case 'articles':
            section = (
                <div> 
                    <ContentComponent />
                    <SidebarComponent />
                </div>
            );
            break;
        case 'form':
            section = (
                <div> 
                    <FormComponent />
                    <SidebarComponent />
                </div>
            )
            break;
        case 'about':
            section = (<AboutUsComponent/>)
            break;
        default:
            section = (<ContentComponent />);
            break;
    }
    return (
        <div className="center">
            {section}
            <div className="clearfix"></div>
        </div>
    );
}

export default CenterComponent;