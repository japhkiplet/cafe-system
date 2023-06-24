export const Reducer = (state, action) => {
    switch(action-type){
        case "login_success":
            return{
                user: action.payload
            }
            case "login_failure":
                return{
                    user: null
                }
                case "LOGOUT":
                    return {
                        user: null
                    }
                default:
                    return state;
    }
}
