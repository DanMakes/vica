import  React, {Component}  from 'react';

import LogoVica from "./Imagenes/LogoPie.jpg";
import LogoFb from "./Imagenes/IconoFace.png";
import LogoTel from "./Imagenes/IconoTw.png";


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
                    <a rel="noopener noreferrer" title= "Ir a Fb" target="_blank" href="https://www.facebook.com/vicaneumaticossa"><input align="left" type="image" alt="facebook-vica" src={LogoFb} /></a>
                    <input title="3794-467734"  align="left" type="image" alt="Telefono-vica" src={LogoTel} />
              </div>
        </div>
    );
  }
}

export default PiePagina;
