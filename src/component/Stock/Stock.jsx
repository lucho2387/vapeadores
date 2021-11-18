import './stock.css'

const Stock = ({ isOpen, numero, stock, closeModal}) => {
    
    //Para que no se cierre al hacer click dentro del modal
    const onHandleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    
    return (
        <div className={`titulo2 ${numero > stock && isOpen && 'titulo2-open'}`}  onClick={closeModal}>
            <div className="modal__dialog1" onClick={onHandleModalDialogClick}>
                <h1 className="modaltitulo2">La cantidad supera al stock actual</h1>
                <button className="botonCerrar" onClick={closeModal}>
                    X
                </button>
            </div>
        </div>
    )
} 

export default Stock
