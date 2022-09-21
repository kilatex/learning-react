import React,{Component} from "react";

class FormComponent extends Component{
    render(h) {
        return(
            <div className="center">
            <section id="content">

                   <h1 className="subheader">Formulario</h1>

                   <form className="mid-form">
                        <div className="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" />
                        </div>

                        <div className="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" />
                        </div>

                        <div className="form-group">
                            <label for="bio">Biografia</label>
                            <textarea name="bio"></textarea>
                        </div>

                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" /> Hombre 
                            <input type="radio" name="genero" value="mujer" /> Mujer 
                            <input type="radio" name="genero" value="otro" /> Otro
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                   </form>
                
            </section>

            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="/" className="btn btn-success">Crear artículo</a>
                </div>

                <div id="search" className="sidebar-item">
                        <h3>Buscador</h3>
                        <p>Encuentra el artículo que buscas</p>
                        <form>
                            <input type="text" name="search" />
                            <input type="submit" name="submit" value="Buscar" className="btn" />
                        </form>
                </div>
            </aside>

            <div className="clearfix"></div>
        </div>
        );
    }
}

export default FormComponent