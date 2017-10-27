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
        filterPjSelect:'',
        filterRgCheckbox:[]
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
        filterPjSelect:value
      })
    }
    filterbyRegion(value){
      this.setState( {
        filterRgCheckbox: value
      })
    }
    render(){
        return(
          <section className="wrap">
            <div className="container">
              <SidebarLayout
              filterText={this.state.filterText}
              filterOcSelect={this.state.filterOcSelect}
              filterPjSelect={this.state.filterPjSelect}
              filterRgCheckbox={this.state.filterRgCheckbox}
              filterUpdate={this.filterUpdate.bind(this)}
              filterbyOcuppation={this.filterbyOcuppation.bind(this)}
              filterbyProject={this.filterbyProject.bind(this)}
              filterbyRegion={this.filterbyRegion.bind(this)}
              />
              <ContentLayout
              employeeList={this.state.employee}
              filterText={this.state.filterText}
              filterOcSelect={this.state.filterOcSelect}
              filterPjSelect={this.state.filterPjSelect}
              filterRgCheckbox={this.state.filterRgCheckbox}
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
