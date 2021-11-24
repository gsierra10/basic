import { useEffect, useState } from 'react'
import store from '../../services/stateManager/store'

const CartHome = () => {
    const [shoes, setShoes] = useState([])
    
    useEffect(() => {
        store.subscribe(() => {
            setShoes(store.getState().shoeCart)
        })
    }, [])


    return (
        <>
            <h2>Shopping Cart</h2>

            {shoes.map(shoe => 
                <div>
                    <img src={shoe.image}></img>
                    <div>{shoe.name}</div>
                    <div>{shoe.price}</div>
                    <button>Delete</button>
                </div>
            )}
        </>
    )

}

export default CartHome;