import  React, {Component}  from 'react';
import {Link, HashRouter} from 'react-router-dom';


//import LogoVica from "./Imagenes/vicaHeader - copia.png";
import NavHeader from "./NavHeader.js";
import LogoVica from "./Imagenes/LogoHeaderppal.jpg";
import List from "./Imagenes/list.png";



class Encabezado extends Component {
  render() {
    return (
            <div className="LogoHeader">
              <table className="NavTable">
                    <tr width="100">
                      <td align="left"  ><img className="list" src={List} alt="Menu"/></td>
                      <td className="TextoMenu">Menu</td>
                      <td align="center"><img className="ImagenHeader" src={LogoVica} alt="VicaNeumaticos" /></td>
                      <td ><NavHeader /></td>
                    </tr>
              </table>
            </div>
    );
  }
}

export default Encabezado;
