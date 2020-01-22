import React, {Component} from 'react';
import './App.css';
import {Route, HashRouter } from "react-router-dom";



import Botonnav from "./Botonnav.js"
import MainMenu from "./MainMenu.js"


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
                            <Route path='/MainMenu' component={MainMenu}/>
                  </HashRouter>
                  </div>
                </div>
      </div>
    );
   }
}
export default App;
