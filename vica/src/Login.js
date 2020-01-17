import React, {Component} from 'react';
import './App.css';
import {hashHistory } from 'react-router';
import {BrowserRouter as Router , Switch, Route, HashRouter } from "react-router-dom";


import Consres from "./Consres.js";//pagina
import Botonnav from "./Botonnav.js"


class App extends Component {
    render() {
    return (
      <div className="App">
            <div className="App-body">
                  <header className="App-header">
                    <h1> Login </h1>
                  </header>
                  <table className="App-table">
                    <tr>
                        <td>  <label className= "App-labels">Usuario: </label></td>
                        <td>  <input  className="App-inputs"  type="text" name="Usuario" /></td>
                    </tr>
                    <tr>
                          <td>  <label className= "App-labels">Contraseña:   </label></td>
                          <td>    <input className="App-inputs" type="text" name="password" /></td>
                    </tr>
                  </table>
                  <br></br>
                  <div>
                  <HashRouter>
                            <Botonnav />
                            <Route path='/Consres' component={Consres}/>
                  </HashRouter>
                  </div>
                </div>
      </div>
    );
   }
}
export default App;
