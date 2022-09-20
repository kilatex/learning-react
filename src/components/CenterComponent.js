import React,{Component} from "react";
import ContentComponent from "./ContentComponent";
import SidebarComponent from "./SidebarComponent";
class CenterComponent extends Component{
    render(){
        return(
            <div className="center">
                <ContentComponent/>
                <SidebarComponent/>
               <div className="clearfix"></div>
            </div>
        );
    }
}

export default CenterComponent;