export const UserReducer = (state ={}, action) => {
    switch(action.type){
        case "REGISTERUSER":
            return({isUserRegister:action.result})
            // console.log("from reducer",action.result)
        case "USERLOGIN" :
            console.log("in user login case from reducer")
            return({isUserLoggedIn:action.result})
        default:
            return state;    
    }
}