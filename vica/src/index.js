import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';
import {hashHistory } from 'react-router';
import Nav from './Nav.js';
import  Botonnav from './Botonnav.js';

//Estilo
import './App.css';




//Otros Sitios
//import About from "./About.js"
import App from "./Login.js"
import Consres from "./Consres.js"

//Servicio
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));

const App2 =  document.getElementById('root')
ReactDOM.render(

              //  <Router hashHistory>
                  <HashRouter>
                      <Route exact path='/' component={App}/>
                      <Route path='/Consres' component={Consres}/>
                </HashRouter>


, App2);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
