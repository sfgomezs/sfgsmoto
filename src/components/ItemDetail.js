
const ItemDetail = ({item}) => {
    return(
        <div className="container my-5">
            <h2>{item.referencia}</h2>
            <img src={item.img}/>
            <p>{item.cilindrada}</p>
            <p>{item.potencia}</p>
            <p>{item.ctorque}</p>
            <p>{item.peso}</p>
            <p>Precio: ${item.precio}</p>
        </div>
    )
}
