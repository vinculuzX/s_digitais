import React from 'react'
import HeaderLayout from './layout/HeaderComponent.jsx'
import SidebarLayout from './layout/SidebarComponent.jsx'
import ContentLayout from './layout/ContentComponent.jsx'
import layoutstyle from './LayoutStylesheet.scss'
export class WrapLayout extends React.Component{
    render(){
        return(
          <section className="wrap">
            <div className="container">
              <SidebarLayout/>  
              <ContentLayout/>  
            </div>
          </section>
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
