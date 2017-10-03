import React from 'react'
import HeaderLayout from './layout/HeaderComponent.jsx'
import SidebarLayout from './layout/SidebarComponent.jsx'
import layoutstyle from './LayoutStylesheet.scss'
export class ContentLayout extends React.Component{
    render(){
        return(
          <section className="wrap">
            <div className="container">
              <SidebarLayout/>  
              <div>Content</div>    
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
                <ContentLayout/>
            </div>
        )
    }
}
