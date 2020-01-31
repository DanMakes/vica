import  React, {Component}  from 'react';
import {Link, HashRouter} from 'react-router-dom';


import LogoVica from "./Imagenes/vicaHeader - copia.png";
import NavHeader from "./NavHeader.js";




class Encabezado extends Component {
  render() {
    return (
            <div className="LogoHeader">
              <table>
                    <tr>
                      <td align="left"><img className="ImagenLogo" src={LogoVica} alt="VicaNeumaticos" /></td>
                      <td align="center">ACA</td>
                      <td align="right"><NavHeader /></td>
                    </tr>
              </table>
            </div>
    );
  }
}

export default Encabezado;
