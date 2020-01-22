import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import './Estilos/styles.css';

//Importar JS
import Consres from "./Consres.js"
import Constrab from "./Constrab.js"
import VerFacturas from "./VerFacturas.js"
import VerPresupuestos from "./VerPresupuestos.js"

class MainMenu extends Component {
  render() {
    return (
      <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
          <Tab tabFor="vertical-tab-one">Consultar Recibos</Tab>
          <Tab tabFor="vertical-tab-two">Consultar Ordenes de Trabajo</Tab>
          <Tab tabFor="vertical-tab-three">Facturas</Tab>
            <Tab tabFor="vertical-tab-four">Presupuestos</Tab>
        </TabList>
        <TabPanel tabId="vertical-tab-one">
          <Consres />
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
          <Constrab />
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
          <VerFacturas />
        </TabPanel>
        <TabPanel tabId="vertical-tab-four">
          <VerPresupuestos />
        </TabPanel>
      </Tabs>
      )
  }
}



export default  MainMenu;
