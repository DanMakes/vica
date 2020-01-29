import  React, {Component}  from 'react';
import'./Estilos/Consres.css';




import LogoVica from "./Imagenes/vicaneum.jpg";
import IconoHome from "./Imagenes/IconoHome48.png"
import IconoAtras from "./Imagenes/IconoAtras.png"



class Encabezado extends Component {
  render() {
    return (
            <div className="LogoHeader">
              <table>
                    <tr>
                      <td align="left"><img className="ImagenLogo" src={LogoVica} alt="VicaNeumaticos" /></td>
                      <td align="center">ACA</td>
                      <td align="right"><input title="Atras"  type ="image" className="IconosAtras" src={IconoAtras} alt="Atras" /></td>
                      <td align="right"><input title="Ir a Home" type ="image"  className="IconoHome" src={IconoHome} alt="Ir a Home" /></td>
                    </tr>
                    <tr>

                    </tr>
              </table>
            </div>
    );
  }
}

export default Encabezado;
