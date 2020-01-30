import React from 'react';
import {Link, HashRouter} from 'react-router-dom';
import'./Estilos/Consres.css';
//NOTA: ACORDARSE < a href= LINK en react

import IconoHome from "./Imagenes/IconoHome48.png"
import IconoAtras from "./Imagenes/IconoAtras.png"

export const Nav = (props) => {
return  (
  <HashRouter>
      <div>
        <Link to="/"><input title="Atras"  type ="image" className="IconosAtras" src={IconoAtras} alt="Atras" /></Link>
        <Link to="/"><input title="Ir a Home" type ="image"  className="IconoHome" src={IconoHome} alt="Ir a Home" /></Link>
     </div>
  </HashRouter>
      );
}

export default Nav;
