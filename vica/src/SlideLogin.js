import React, {Component} from 'react';
import './App.css';
import {Route, HashRouter } from "react-router-dom";
import Botonnav from "./Botonnav.js"
import MainMenu from "./MainMenu.js"
import { Carousel } from "react-responsive-carousel";



import vicaneum from './Imagenes/vicaneum2.jpg';
  //

class SlideLogin extends Component {
    render() {
    return (
<div className="SlideLogin">
              <Carousel autoPlay >
                    <div className="App-body">

                    <img src={vicaneum} alt="vicaneum" />
                    <div className="texto-medio">
                    <h2> Bienvenidos </h2>
                    </div>
                    </div>
                    <div>
                              <header className="App-header">
                                <h1> Inicio de sesion </h1>
                              </header>
                              <table className="App-table">
                                <tr>
                                    <td>  <label className= "App-labels">Usuario: </label></td>
                                    <td>  <input  className="App-inputs"  type="text" name="Usuario" /></td>
                                </tr>
                                <tr>
                                      <td>  <label className= "App-labels">Contraseña:   </label></td>
                                      <td>  <input className="App-inputs" type="password" name="password" /></td>
                                </tr>
                              </table>
                              <br></br>

                              <HashRouter>
                                        <Botonnav />
                                        <Route path='/MainMenu' component={MainMenu}/>
                              </HashRouter>

                    </div>
                </Carousel>
</div>
);
}
}

 export default SlideLogin;
