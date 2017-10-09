import dispatcher from '../Dispatcher.jsx'

export function createEmployee(data){
    dispatcher.dispatch({
        type:"NEW_EMPLOYEE",
        data
    })    
}