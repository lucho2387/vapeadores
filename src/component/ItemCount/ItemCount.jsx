import { Fragment,useState } from "react";
import './ItemCount.css'; 
import Modal from '../Modal/Modal'
import Stock from "../Stock/Stock";
import ModalMessageError from '../Modal/ModalMessageError'

const ItemCount = ({stock, limite}) => {
    
    //Inicial
    const [numero, setNumero] = useState(1)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const onIncrease = () => {
        setNumero(numero < limite ? numero + 1 : numero);
        
    }

    const onDecrease = () => {
        setNumero(numero > 0 ? numero - 1 : numero);
    }

    const onOpenModal = () => {
        setIsOpenModal(true);
    }

    const onCloseModal = () => {
        setIsOpenModal(false);
        let numero = 1;
        setNumero(numero); 
    }

    return (
        <Fragment>
            <div className="container">
                <h2 className="nombreProducto">VAPORESSO SKY SOLO PLUS</h2>
            </div>
            <div className="container">
                <button className="botonDisminuir"  onClick={onDecrease}>-</button>
                <h3 className="cantidad">{`${numero}`}</h3>
                <button className="botonIncrementar"   onClick={onIncrease} >+</button>
            </div>
            <div className="container">
                <button className="botonAgregar"  onClick={onOpenModal}>Agregar</button>
            </div>
            <Modal
                isOpen={isOpenModal}
                numero={numero}
                closeModal={onCloseModal}
            />
            <Stock
                isOpen={isOpenModal}
                numero={numero}
                stock={stock}
                closeModal={onCloseModal}
            />

            <ModalMessageError 
                isOpen={isOpenModal}
                numero={numero}
                closeModal={onCloseModal}
            />
        </Fragment>
    )
}

export default ItemCount
