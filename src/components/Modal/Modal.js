import React from 'react';
import './Modal.scss' 

function Modal(props) {
    const {children} = props;
    return <div className="modalContainer">
            <div className="modalContent">
              {children}
            </div>
            <div className="modalBackground">
            </div>    
        </div>;
}

export default Modal;