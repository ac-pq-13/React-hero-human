import {combineReducers} from 'redux'
import { SELECT_USER } from "../../actions/user/select"
const selected = (stateDefault = {}, action)=>{
    switch(action.type){
        case SELECT_USER:
            return action.payload
        default:
            return stateDefault    
    }
}
 export default combineReducers ({selected})
