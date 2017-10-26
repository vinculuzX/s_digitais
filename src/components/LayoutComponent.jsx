import React from 'react'
import HeaderLayout from './layout/HeaderComponent.jsx'
import SidebarLayout from './layout/SidebarComponent.jsx'
import ContentLayout from './layout/ContentComponent.jsx'
import layoutstyle from './LayoutStylesheet.scss'
// employee mock data
import EmployeeStore from '../stores/EmployeeStore.jsx'

export class WrapLayout extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        employee:EmployeeStore.getAll(),
        filterText:'',
        filterOcSelect:'',
        filterbyProject:''
      }
    }
    filterUpdate(value){
      this.setState({
        filterText:value
      })
    }
    filterbyOcuppation(value){
      this.setState({
        filterOcSelect:value
      })
    }
    filterbyProject(value){
      this.setState({
        filterbyProject:value
      })
    }
    render(){
        return(
          <section className="wrap">
            <div className="container">
              <SidebarLayout
              filterText={this.state.filterText}
              filterOcSelect={this.state.filterOcSelect}
              filterbyProject={this.state.filterbyProject}
              filterUpdate={this.filterUpdate.bind(this)}
              filterbyOcuppation={this.filterbyOcuppation.bind(this)}
              filterbyProject={this.filterbyProject.bind(this)}
              />
              <ContentLayout
              employeeList={this.state.employee}
              filterText={this.state.filterText}
              filterOcSelect={this.state.filterOcSelect}
              filterbyProject={this.state.filterbyProject}
              />
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
