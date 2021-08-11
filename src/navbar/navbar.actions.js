import { NAVBAR_FETCH, NAVBAR_SET } from "./navbar.types"

export const fetchNavbarAction=() =>{
    return {
        type:NAVBAR_FETCH
    }
}

export const setNavbarAction=(response) =>{
    return{
        type:NAVBAR_SET,
        payload:{
            navbar:response
        }
    }
}