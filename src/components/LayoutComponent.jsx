import React from 'react'
import HeaderLayout from './layout/HeaderComponent.jsx'
import SidebarLayout from './layout/SidebarComponent.jsx'
export class ContentLayout extends React.Component{
    render(){
        return(
            <div></div>
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