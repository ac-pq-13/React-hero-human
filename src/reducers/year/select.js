import {combineReducers} from 'redux'
import { SELECT_YEAR } from "../../actions/year/select"
const selected = (stateDefault = 21, action)=>{
    switch(action.type){
        case SELECT_YEAR:
            return action.payload
        default:
            return stateDefault    
    }
}
 export default combineReducers ({selected})