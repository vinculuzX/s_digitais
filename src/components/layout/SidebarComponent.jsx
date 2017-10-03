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

                                <div className="squarebox">
                                    <input type="checkbox" value="curitiba" id="squarebox" name="check" />
                                    <label for="squarebox"></label>
                                </div>  Curitiba                        
                    
                        </div>
                    </div>
                </div>
                </div>
            )
    }
}
