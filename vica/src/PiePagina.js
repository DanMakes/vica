import  React, {Component}  from 'react';

import LogoVica from "./Imagenes/vicaneum2.jpg";
import LogoFb from "./Imagenes/IconoFace.png";
import LogoTw from "./Imagenes/IconoTw.png";


class PiePagina extends Component {
  render() {
    return (
        <div className="Container-PiePagina">
              <div className="Container-Logo" > <img className="Logo-PiePagina" align="left" src={LogoVica} alt="vica-Logo" /> </div>
              <div className="PiePagina">
                  <p>Vica Neumaticos </p>
                  <p>Tren Delantero - Frenos - Suspension - Alineado y Balanceo - Llantas y Repuestos </p>
                  <p> Sucursales: </p>
                  <p>Av. 3 de abril 573 Tel: 4-467734 Fax: 4-468929</p>
                  <p>Ruta 12 y A. Mazza Km.1031 Tel 4-451030 Fax: 4-456082</p>
              </div>
              <div className="Container-Redes" align="right">
                    <input align="right" type="image" alt="facebook-vica" src={LogoFb} />
                    <input  align="right" type="image" alt="twitter-vica" src={LogoTw} />
              </div>
        </div>
    );
  }
}

export default PiePagina;
