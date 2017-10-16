import EventEmitter from "events"
import employeeDataMocked from '../mock/employee.json'
import dispatcher from '../Dispatcher.jsx'

export class EmployeeStore extends EventEmitter{

    constructor(){
        super()
        this.employee = employeeDataMocked
    }
    getAll(){
        return this.employee
    }
    createEmployees(employeeData){
        this.employee.push({
            employeeData
        })
        this.emit("change")
    }
    handleAction(action){
        switch(action.type){
            case "NEW_EMPLOYEE":{
                this.createEmployees();
            }
        }
    }
}

const employeeStore  = new EmployeeStore
dispatcher.register(employeeStore.handleAction.bind(employeeStore))

export default employeeStore
