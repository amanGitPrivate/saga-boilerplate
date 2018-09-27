import React from 'react';
import './Button.scss'

function Button(props) {
    const {statusButton, buttonText, onClick, saveButton, status} = props;
    let buttonClass = 'standardButton';
    buttonClass = saveButton ? 'saveButton' : buttonClass;
    buttonClass =  statusButton ? status ? 'statusButtonLive' : 'statusButtonDraft' : buttonClass;

    return <div onClick={onClick} className={buttonClass}>
             {buttonText}
           </div>  
}

export default Button;