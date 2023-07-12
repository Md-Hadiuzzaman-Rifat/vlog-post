import React from 'react';

const Button = ({children}) => {
    return (
        <button className='px-2 py-2 w-[200px] font-thin rounded-full bg-[#f08f74] center'>
            {children}
        </button>
    );
};

export default Button;