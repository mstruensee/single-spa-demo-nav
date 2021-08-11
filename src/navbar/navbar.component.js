import React, {useEffect}  from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNavbarAction } from "./navbar.actions"
import { navbarSelector } from "./navbar.selectors"

export const NavbarComponent = () => {
    const dispatch = useDispatch()
    const navbar = useSelector(state=>{
        return navbarSelector(state)
    })
    useEffect(()=>{
        console.log('effect run')
        dispatch(fetchNavbarAction())
    },[] ) 
    console.log(navbar)
    return (
        <ul>
            {
                navbar.map(
                    (item)=>{
                        return <li key={item.id}>{item.name}</li>
                    }
                )
            }
        </ul>
    )
}

// function NavbarComponent(){
//     return <div>
//         navbar2
//     </div>
// }
// module.exports = {NavbarComponent:NavbarComponent}