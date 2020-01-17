import React, {Component} from 'react';
//import'./Estilos/Consres.css';

class Consres extends Component {
  constructor(props) {
    super(props);
    this.state = ({ FechaDesde: '' ,
                    FechaHasta: '',
                    Sucursal: false
  })
     this.procesar = this.procesar.bind(this);
     this.cambioFechaDesde =this.cambioFechaDesde.bind(this);
    this.cambioFechaHasta =this.cambioFechaHasta.bind(this);
     this.cambioSucursal =this.cambioSucursal.bind(this);
  }

  render() {
    return (
       <div>
      <form onSubmit={this.procesar}>
           <p>Desde: <input id="date" type="text" value={this.state.FechaDesde} onChange={this.cambioFechaDesde} /></p>
           <p>Hasta:<input id="date" type="number" value={this.state.FechaHasta} onChange={this.cambioFechaHasta} /></p>
           <p>Sucursal:<input type="checkbox" value={this.state.Sucursal} onChange={this.cambioSucursal} /></p>
           <p><input type="submit" /></p>
        </form>
          </div>
    );
  }

  procesar(e) {
   e.preventDefault();
   alert('Dato cargado '+this.stateFechaDesde + ' ' +
                        +this.state.FechaHasta + ' ' +
                        +this.state.Sucursal);
 }
  cambioFechaDesde(e) {
      this.setState( {
        FechaDesde: e.target.value
      })
    }

    cambioFechaHasta(e) {
      this.setState( {
        FechaHasta: e.target.value
      })
    }

    cambioSucursal(e) {
      this.setState( {
        Sucursal:  e.target.value
      })
    }
  };


export default Consres;


// function Consres() {
//   return (
//     <div className="Consres">
//         <header className="Consres-header">
//           <h1> Consultar recibos </h1>
//         </header>
//         <div className="Conres-body">
//             <div className="Consres-OpcionesBuscar">
//                   <table className="Conres-table">
//                         <tr>
//                             <td>  Desde  :  </td>
//                             <td > <input id="date" type="date" /></td>
//                             <td >  Hasta: </td>
//                             <td > <input id="date" type="date" /></td>
//                       </tr>
//                   </table>
//             </div>
//         </div>
//       </div>
//     );
// }
