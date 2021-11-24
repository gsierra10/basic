import { useEffect, useState } from "react"
import store from "../../services/store"
import { ADD_SHOE, DELETE_SHOE } from "../../services/actions"

const ShoesHome = () => {
    const [shoes, setShoes] = useState([])
    const addShoe = (shoe) => {
        return {
            type: ADD_SHOE,
            payload: shoe
        }
    }
    const ShoeAdd = (product) => {
        store.dispatch(addShoe(product))
    }
    return (
        <>
            <h2>Listado de productos</h2>

            {shoes.map(shoe => 
                <div>
                    <img src={shoe.image}></img>
                    <div>{shoe.name}</div>
                    <div>{shoe.price}</div>
                    <button onClick={() => ShoeAdd(shoe)}>Buy</button>
                </div>
            )}
        </>
    )
}


export default ShoesHome
