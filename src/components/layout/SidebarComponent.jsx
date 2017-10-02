import React from 'react'

export class SidebarLayout extends React.Component{
    render(){
            return(
                <div class="sidebar__content">
                    <div class="sibebar__search">
                        <div class="sidebar__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div class="sidebar__filter">
                        <div class="sidebar__select">
                            <select>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div class="sidebar__check">
                            <h3>Filtra por <b>Cidade</b></h3>
                        </div>
                    </div>
                </div>
            )
    }
}