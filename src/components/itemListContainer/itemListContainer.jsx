import { useEffect, useState } from "react"
import Item from "../item/item"
import { useParams } from "react-router-dom"
import Carrousel from "../carrousel/carrousel"
import ItemList from "../itemList/itemList"
import { db } from "../../firebase/client"
import { collection, doc, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {

    const { categoria } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {

        if (categoria) {
            const productsRefFilter = query(
                collection(db, "products"),
                where("categoryId", "==", categoria),
            )

            getDocs(productsRefFilter)
                .then(
                    snapshot => {
                        setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                    }
                )
        } else {
            const productsRef = collection(db, "products")
            getDocs(productsRef)
                .then(snapshot => {
                    setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                })
        }

    }, [categoria])

    return (
        categoria ? (
            <>  <h1 className="categoria">{categoria}</h1>
                <ItemList greeting={items} />
            </>
        ) : (
            <>
                <Carrousel />
                <ItemList greeting={items} />
            </>
        )

    )
}

export default ItemListContainer