import React from 'react';
import "./ActionButton.scss"
const ActionButton = ({children, ...rest}) => {
    return (
        <button className='actionButton' {...rest}>
            {children}
        </button>
    );
};

export default ActionButton;