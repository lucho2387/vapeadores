import { Fragment,useState } from "react";
import './ItemCount.css'; 
import Modal from '../Modal/Modal'
import Stock from "../Stock/Stock";

const ItemCount = () => {
    
    //Inicial
    const [numero, setNumero] = useState(1)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const Incrementar = () => {
        setNumero(numero + 1);
    }

    const Disminuir = () => {
        setNumero(numero > 0 ? numero - 1 : numero);
    }

    const openModal = () => {
        // window.location.reload(true);
        // setNumero(numero);
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
         let numero = 1;
        setNumero(numero); 
    }

    
    // const handleConfirm = () => {
    //     setFecha(fecha);
    // }
    
    // const onChange = () => {
    //     setFecha(new Date());
    // }


    return (
        <Fragment>
            <div className="container">
                <h2 className="nombreProducto">VAPORESSO SKY SOLO PLUS</h2>
            </div>
            <div className="container">
                <button className="botonDisminuir"  onClick={Disminuir}>-</button>
                <h3 className="cantidad">{`${numero}`}</h3>
                <button className="botonIncrementar" onClick={Incrementar}>+</button>
            </div>
            <div className="container">
                <button className="botonAgregar"  onClick={openModal}>Agregar</button>
            </div>
            {/* {numero > 0 && isOpenModal && <Modal />} */}
            <Modal
                isOpen={isOpenModal}
                numero={numero}
                closeModal={closeModal}
            />
            <Stock
                isOpen={isOpenModal}
                numero={numero}
                closeModal={closeModal}
            />
        </Fragment>
    )
}

export default ItemCount
