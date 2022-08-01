import React from "react";
import { Switch, Route, Redirect } from 'react-router';

import Tema from "../components/tema/tema"
import compraTema from "../components/compraTema/compraTema"
import relatorioTema from "../components/relatorioTema/relatorioTema"
import Anuncio from "../components/anuncio/anuncio"
import areaAnuncio from "../components/areaAnuncio/areaAnuncio"
import postagemAnuncio from "../components/postagemAnuncio/postagemAnuncio"
import relatorioAnuncio from "../components/relatorioAnuncio/relatorioAnuncio"



function Routes (props) {
    return (
        <Switch>
        <Route exact path='/'/>
        <Route path='/Tema' component={Tema} /> 
        <Route path='/compraTema' component={compraTema} /> 
        <Route path='/relatorioTema' component={relatorioTema} /> 
        <Route path='/Anuncio' component={Anuncio} /> 
        <Route path='/postagemAnuncio' component={postagemAnuncio} /> 
        <Route path='/areaAnuncio' component={areaAnuncio} /> 
        <Route path='/relatorioAnuncio' component={relatorioAnuncio} /> 
        </Switch>
    )
}

export default Routes;