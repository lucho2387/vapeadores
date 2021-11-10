const Carrito = (props) => {
    return (
        <li className = {props.estiloLista}>
            <a href="#" className = {props.estiloEnlace}>
                <i className={props.icono} arial-hidden="true"></i>
                <span className={props.estiloSpan}>{props.valor}</span>
            </a>
        </li>
    )
}

export default Carrito
