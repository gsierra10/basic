import { APIConsumer } from "../../services/APIConsumer"
const LoginUser = () => {    

    const handleChanges = async (e) => {
        e.preventDefault()
        await APIConsumer.loginUser(JSON.stringify({email: e.target.email.value, password: e.target.password.value}))  
    }

    return (
        <form className='add-form' onSubmit={(e)=>handleChanges(e)}>
            <div className='form-control'>
                <label>Email</label>
                <input type='email' name='email' placeholder='Email' required />
            </div>
            <div className='form-control'>
                <label>Contraseña</label>
                <input type='password' name='password' placeholder='Contraseña' required />
            </div>    
            <input type='submit' value='Login' className='btn btn-block' />
        </form>
    )
}

export default LoginUser
