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
    filterbyOcuppation(){
        const val = this.selectOcValue.value
        this.props.filterbyOcuppation(val)
    }
    filterbyProject(){
        const val = this.selectPjValue.value
        this.props.filterbyProject(val)
    }
    filterbyRegion(){

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
                            <select id="filter__occupation"
                                ref={(value)=>{this.selectOcValue = value}}
                                onChange={this.filterbyOcuppation.bind(this)}
                            >
                                <option className="sidebar__select--font" value="">Filtre por Cargo</option>
                                <option className="sidebar__select--font" value="UX/UI Designer">UX/UI Designer</option>
                                <option className="sidebar__select--font" value="Frontend">Frontend</option>
                                <option className="sidebar__select--font" value="Backend">Backend</option>
                            </select>
                        </div>
                        <div className="sidebar__select">
                            <select className="filter__project"
                                ref={(value)=>{this.selectPjValue = value}}
                                onChange={this.filterbyProject.bind(this)}
                            >
                                <option className="sidebar__select--font" value="">Filtre por Projeto</option>
                                <option className="sidebar__select--font" value="pis">PIS</option>
                                <option className="sidebar__select--font" value="renove">RENOVE</option>
                                <option className="sidebar__select--font" value="salvare">SALVARE</option>
                                <option className="sidebar__select--font" value="saf">SAF</option>
                            </select>
                        </div>
                        <div className="sidebar__check">
                            <h3 className="sidebar__title">Filtrar por <b>Cidade</b></h3>
                            <div className="checkbox">
                              <input id="ctb" type="checkbox" name="ctb" value="Curitiba"
                                onChange={this.filterbyRegion.bind(this)}
                              />
                              <label htmlFor="ctb"><span><span></span></span>Curitiba</label>
                            </div>
                            <div className="checkbox">
                              <input id="sp" type="checkbox" name="sp" value="São Paulo"
                                onChange={this.filterbyRegion.bind(this)}
                              />
                              <label htmlFor="sp"><span><span></span></span>São Paulo</label>
                            </div>
                            <div className="checkbox">
                              <input id="rj" type="checkbox" name="rj" value="Rio de Janeiro"
                                onChange={this.filterbyRegion.bind(this)}
                              />
                              <label htmlFor="rj"><span><span></span></span>Rio de Janeiro</label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
    }
}
