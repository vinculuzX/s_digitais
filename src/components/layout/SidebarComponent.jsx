import React from 'react'
import sidebarstyle from './SidebarStylesheet.scss'
export default class SidebarLayout extends React.Component{
    constructor(props){
        super(props)
    }
    filterUpdate(){
      const val = this.textValue.value
      this.props.filterUpdate(val)
    }
    render(){
            return(
                <div className="sidebar">
                <div className="sidebar__content">
                    <div className="sibebar__search">
                        <div className="sidebar__input">
                            <input type="text"
                              ref={(value)=>{this.textValue = value}}
                              onChange={this.filterUpdate.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="sidebar__filter">
                        <div className="sidebar__select">
                            <select id="filter__occupation">
                                <option className="sidebar__select--font" value="">Filtre por Cargo</option>
                                <option className="sidebar__select--font" value="ux/ui">UI/UX Designer</option>
                                <option className="sidebar__select--font" value="frontend">FrontEnd</option>
                                <option className="sidebar__select--font" value="backend">BackEnd</option>
                            </select>
                        </div>
                        <div className="sidebar__select">
                            <select className="filter__project">
                                <option className="sidebar__select--font">Filtre por Projeto</option>
                                <option className="sidebar__select--font" value="pis">PIS</option>
                                <option className="sidebar__select--font" value="renove">RENOVE</option>
                                <option className="sidebar__select--font" value="salvare">SALVARE</option>
                                <option className="sidebar__select--font" value="safe">SAFE</option>
                            </select>
                        </div>
                        <div className="sidebar__check">
                            <h3 className="sidebar__title">Filtrar por <b>Cidade</b></h3>
                            <div className="checkbox">
                              <input id="ctb" type="checkbox" name="ctb" value="ctb"/>
                              <label htmlFor="ctb"><span><span></span></span>Curitiba</label>
                            </div>
                            <div className="checkbox">
                              <input id="sp" type="checkbox" name="sp" value="sp"/>
                              <label htmlFor="sp"><span><span></span></span>São Paulo</label>
                            </div>
                            <div className="checkbox">
                              <input id="rj" type="checkbox" name="rj" value="rj" />
                              <label htmlFor="rj"><span><span></span></span>Rio de Janeiro</label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
    }
}
