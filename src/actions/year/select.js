export const SELECT_YEAR = 'SELECT_YEAR'


export const selectYear = (payload) =>{
    return{
        type: SELECT_YEAR,
        payload,
    }
}