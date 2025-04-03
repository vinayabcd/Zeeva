import './Loginmodel.css';

const Loginmodel=({isOpen,onClose,title,children})=>{
    if(!isOpen) return null;
    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>

                <h2>
                    {title}
                </h2>
                {children}

                <button className="close-btn" onClick={onClose}>
                    Close
                </button>

            </div>

        </div>
    );
};
export default Loginmodel;