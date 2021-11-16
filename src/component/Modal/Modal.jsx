import './modal.css'

const Modal = ({ isOpen, numero, closeModal}) => {
    
    //Para que no se cierre al hacer click dentro del modal
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    
    return (
        <div className={`modal ${numero > 0 && isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <h1 className="modaltitulo">El producto fue agregado correctamente</h1>
                <button className="botonCerrar" onClick={closeModal}>
                    X
                </button>
            </div>
        </div>
    )
} 

export default Modal
