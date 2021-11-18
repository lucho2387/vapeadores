import '../Stock/stock.css'

const ModalMessageError = ({ isOpen, numero, closeModal}) => {
    
    //Para que no se cierre al hacer click dentro del modal
    const onHandleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    
    return (
        <div className={`modal ${numero == 0 && isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog1" onClick={onHandleModalDialogClick}>
                <h1 className="modaltitulo">La cantidad ingresada no es admitida</h1>
                <button className="botonCerrar" onClick={closeModal}>
                    X
                </button>
            </div>
        </div>
    )
} 

export default ModalMessageError
