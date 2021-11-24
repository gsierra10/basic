import { useEffect, useState } from "react"
import store from "../../services/store"
import { ADD_SHOE } from "../../services/actions"

const ShoesHome = () => {
    const [shoes, setShoes] = useState([{ "id": 1, "name": "Hipster Ultimate", "price": 50, "image": "https://images.vans.com/is/image/VansEU/VN0A38G1PHN-HERO?$PLP-IMAGE$" },
    { "id": 2, "name": "On Motion Live", "price": 99, "image": "https://images.vans.com/is/image/VansEU/VN0A3WKT4RQ-HERO?$PLP-IMAGE$" },
    { "id": 3, "name": "Underground Max", "price": 90, "image": "https://images.vans.com/is/image/VansEU/VN0A4UHZV3M-HERO?$PLP-IMAGE$" },
    { "id": 4, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A54F3U8Q-HERO?$PLP-IMAGE$" },
    { "id": 5, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A3WMAVNG-HERO?$PLP-IMAGE$" },
    { "id": 6, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A3WKT4PF-HERO?$PLP-IMAGE$" },
    { "id": 7, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A3WKT4R2-HERO?$PLP-IMAGE$" },
    { "id": 8, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A3MVD4Y5-HERO?$PLP-IMAGE$" }])
    const addShoe = (shoe) => {
        return {
            type: ADD_SHOE,
            payload: shoe
        }
    }
    const ShoeAdd = (shoe) => {
        store.dispatch(addShoe(shoe))
    }
    return (
        <>
            <h2>Shoe List</h2>

            {shoes.map(shoe => 
                <div>
                    <img src={shoe.image} alt='shoes'></img>
                    <div>{shoe.name}</div>
                    <div>{shoe.price}</div>
                    <button onClick={() => ShoeAdd(shoe)}>Buy</button>
                </div>
            )}
        </>
    )
}


export default ShoesHome
