import React from 'react'
import HeaderLayout from './layout/HeaderComponent.jsx'
import SidebarLayout from './layout/SidebarComponent.jsx'
import ContentLayout from './layout/ContentComponent.jsx'
import layoutstyle from './LayoutStylesheet.scss'
// employee mock data
import EmployeeStore from '../stores/EmployeeStore.jsx'

export class WrapLayout extends React.Component{
    constructor(){
      super()
      this.state = {
        employee:EmployeeStore.getAll(),
        filterText:''
      }
    }
    render(){
        return(
          <section className="wrap">
            <div className="container">
              <SidebarLayout filterText={this.state.filterText}/>
              <ContentLayout employeeList={this.state.employee}/>
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
