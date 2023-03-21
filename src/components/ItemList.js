import { Link } from "react-router-dom"

const ItemList = ( { items} ) => {
    return (
        <div>
            <h2>Productos</h2>
            <hr/>
            <div className='row my-5'>
                {items.map((el) => (
                    <div key={el.id} className='col-3 m-1'>
                        <img src={el.img} alt={el.name}/>
                        <h4>{el.referencia}</h4>
                        <p>Precio: <strong>${el.precio}</strong></p>
                        <Link to={`/detail/${el.id}`} className='btn btn-primary'>Ver más</Link>
                    </div>)
                )}
            </div>
        </div>
    )
}

export default ItemList