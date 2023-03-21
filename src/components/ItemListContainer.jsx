import { useEffect } from "react"
import { useState } from "react"
import ItemList from './ItemList'
import { pedirDatos } from "../helpers/pedirDatos"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((Response) => {
                if (!categoryId) {
                    setProductos(Response)
                } else {
                    setProductos(Response.filter((prod) => prod.category === categoryId))
                }
                
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

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