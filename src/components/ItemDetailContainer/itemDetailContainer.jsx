import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from "../itemDetail/itemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/client"
// import '../components/ItemDetailContainer/itemDetailContainer.module.css'



const ItemDetailContainer = () => {

    const {id} = useParams()

    const [producto, setProducto] = useState()

    useEffect(() => {

        const productRef = doc(db, "products", id )

        getDoc(productRef)
        .then((snapshot) => {
            if(snapshot.exists()){
                setProducto({cantidad: 1, id: snapshot.id, ...snapshot.data()})
            }
        })

    }, [id])

    
    return(
        <>
            {<ItemDetail producto={producto}/>}
        </>
    )
}
export default ItemDetailContainer