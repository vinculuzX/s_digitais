import React from 'react'
import HeaderLayout from './layout/HeaderComponent.jsx'
import SidebarLayout from './layout/SidebarComponent.jsx'
import layoutstyle from './LayoutStylesheet.scss'
export class ContentLayout extends React.Component{
    render(){
        return(
          <section class="wrap">
            <div class="container">
              <SidebarLayout/>
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
            </div>
        )
    }
}
