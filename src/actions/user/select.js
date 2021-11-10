export const SELECT_USER = 'SELECT_USER'


export const selectUser = (payload) =>{
    return{
        type: SELECT_USER,
        payload
    }
}