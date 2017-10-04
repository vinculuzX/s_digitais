import React from 'react'
import sidebarstyle from './SidebarStylesheet.scss'

export default class SidebarLayout extends React.Component{
    render(){
            return(
                <div className="sidebar">
                <div className="sidebar__content">
                    <div className="sibebar__search">
                        <div className="sidebar__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="sidebar__filter">
                        <div className="sidebar__select">
                            <select>
                                <option className="sidebar__select--font">Filtre por Cargo</option>
                            </select>
                        </div>
                        <div className="sidebar__select">
                            <select>
                                <option className="sidebar__select--font">Filtre por Projeto</option>
                            </select>
                        </div>
                        <div className="sidebar__check">
                            <h3 className="sidebar__title">Filtrar por <b>Cidade</b></h3>
                            <div className="checkbox">
                              <input id="ctb" type="checkbox" name="field" value="ctb"/>
                              <label htmlFor="ctb"><span><span></span></span>Curitiba</label>
                            </div>
                            <div className="checkbox">
                              <input id="sp" type="checkbox" name="field" value="sp"/>
                              <label htmlFor="sp"><span><span></span></span>São Paulo</label>
                            </div>
                            <div className="checkbox">
                              <input id="rj" type="checkbox" name="field" value="rj"/>
                              <label htmlFor="rj"><span><span></span></span>Rio de Janeiro</label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
    }
}
