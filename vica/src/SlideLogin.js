import React, {Component} from 'react';
import './App.css';
import {Route, HashRouter, Link } from "react-router-dom";
import Botonnav from "./Botonnav.js"
import MainMenu from "./MainMenu.js"
import { Carousel } from "react-responsive-carousel";


//import loginVica from "./Estilos/login_vica.jpg";

import loginVica from "./login_vica.jpg";

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


                               <Link to="#container-login"> <button className="comenzar" > Comenzar </button></Link>

                          </div>
                    </div>
                     <div>
                        <div className="limite">
                              <div className="container-login" id="container-login">
                                    <div className="App-login" id="App-login" >
                                          <form class="login-form validate-form">
                                          <span class="login-form-logo">
                                          </span>
                                          <span class="login-form-title p-b-34 p-t-27">
                                            Iniciar Sesion
                                          </span>
                                          <div className="form-input">
                                                 <input  className="App-inputs"  type="text" name="Usuario" placeholder="Usuario" />
                                                 	<span className="focus-input" data-placeholder="&#xf207;"></span>
                                                  <input className="App-inputs" type="password" name="password" placeholder="Password" />
                                                 <span className="focus-input" data-placeholder="&#xf191;"></span>
                                           </div>
                                           <HashRouter>
                                                     <Botonnav />
                                                     <Route path='/MainMenu' component={MainMenu}/>
                                           </HashRouter>

                                         </form>

                                    </div>
                              </div>
                            </div>

                    </div>
                </Carousel>
</div>
);
}
}

 export default SlideLogin;
