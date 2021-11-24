import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import store from "../../services/store"

const Header = () => {

    const login = useSelector((state)=>state.login )
    // const [login, setLogin] = useState(false) 

    // useEffect(()=>{
    //     store.subscribe(()=>{
    //         setLogin(store.getState().login)
    //     })
    // }, [])
    
    return (
        <div>

            The user is <b>{login ? '' : 'not'}</b> logged in.
            
        </div>
    )
}

export default Header
