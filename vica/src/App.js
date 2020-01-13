import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
                <button> Ingresar </button>
              </div>
      </div>
    );
   }
}

export default App;
