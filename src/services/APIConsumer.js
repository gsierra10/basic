import store from "../services/store"
import { LOG_IN } from "../services/actions"

export const APIConsumer = {

    loginUser: async (data) => {
        try{
            let result = await fetch('http://localhost:5000/user/login', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: data
            })
            result = await result.json()
            localStorage.setItem('token', result.data) 
            if (!result.mensaje) {
                store.dispatch({
                    type: LOG_IN,
                    payload: result.data
                }) 
            }
        } catch(data){
            console.log(data)
        }
    }
}