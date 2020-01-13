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
                  <label className= "App-labels">Usuario   :
                  <input type="text" name="Usuario" />
                 </label>
                  <br></br>
                  <label className= "App-labels">Contraseña:
                  <input type="text" name="password" />
                  </label>
                  <br></br>
                  <button> Ingresar </button>
              </div>
      </div>
    );
   }
}

export default App;
