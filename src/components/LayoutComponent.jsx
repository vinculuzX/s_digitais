import React from 'react'
import HeaderLayout from './layout/HeaderComponent.jsx'

export class WrapLayout extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>wrap layout</div>
        )
    }
}
export default class LayoutComponent extends React.Component {

    render(){
        return(
            <div>
                <HeaderLayout/>
                <WrapLayout/>
            </div>
        )
    }
}