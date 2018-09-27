import React from 'react';
import './Checkbox.scss' 

function CheckBox(props) {
    return <div className="container">
            <div className="round">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox"></label>
            </div>
        </div>;
}

export default CheckBox;