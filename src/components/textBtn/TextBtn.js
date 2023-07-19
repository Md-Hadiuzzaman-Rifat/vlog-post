import React from 'react';
import "./TextBtn.scss"
const TextBtn = ({children}) => {
    return (
    
        <div className=' border font-light text-sm text-center border-white-300 text-white rounded-full w-36 py-2'>
            {children} 
        </div>
    );
};

export default TextBtn;