import React,{Component} from "react";

class SidebarComponent extends Component{
    render(){
        return (
            <aside id="sidebar">
            <div id="nav-blog" className="sidebar-item">
                <h3>You can do this</h3>
                <a href="/" className="btn btn-success">Create Article</a>
            </div>

            <div id="search" className="sidebar-item">
                    <h3>Searcher</h3>
                    <p>Find the article that you want</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Search" className="btn" />
                    </form>
            </div>
        </aside>
        );
    }
}

export default SidebarComponent;