import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../helpers/pedirDatos"
const ItemDetailContainer =() => {
    const [item, setItem] = useState(null)
    const [loading, SetLoading] = useState(true)
    const { itemId } =useParams()

    useEffect(() => {
        SetLoading(true)

        pedirProductoPorId(itemId)
            .then((resp) => {
                setItem(resp)
            })
            .finally(() => {
                SetLoading(false)
            })
    }, [])
}