import React from 'react';

const Button = ({children}) => {
    return (
        <div className='px-8 py-2 w-[200px] font-thin rounded-full bg-[#f08f74] center'>
            {children}
        </div>
    );
};

export default Button;