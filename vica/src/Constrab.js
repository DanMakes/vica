import  React, {Component}  from 'react';
import'./Estilos/Consres.css';
import refresh from './Imagenes/refresh.png';

import Trabajos from './Trabajos.js';
import DetalleTrabajo from './DetalleTrabajo.js';
//import Items from './Itemres.js';
///import money from './Imagenes/money.png';
//import Pago from './Pagosres.js';

//Elementos del material-ui


class Constrab extends Component {
  render() {
    return (
      <div className="Consres">

               <header className="Consres-header">
                 <h1> Consulta de Trabajos </h1>
               </header>

                <div className="Conres-body">
                        <table className="Consres-Recibos">
                        <tr>
                            <td>Consulta de Trabajos</td>
                        </tr>
                        <tr>
                            <td><Trabajos />   </td>
                        </tr>
                        <tr>
                            <td>Detalle de la orden</td>
                        </tr>
                        <tr>
                            <td><DetalleTrabajo />   </td>
                        </tr>
                        </table>
                </div>
      </div>
    );
  }
  };


export default Constrab;
