import { useEffect } from "react"
import { useState } from "react"
import ItemList from './ItemList'
import { pedirDatos } from "../helpers/pedirDatos"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        pedirDatos()
            .then((Response) => {
                setProductos(Response)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="contenedor">
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/> 
            }
             
        </div>
    )
 }
 
 export default ItemListContainer