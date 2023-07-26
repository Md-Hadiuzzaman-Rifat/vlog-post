import React from 'react';

const Button = ({children}) => {
    return (
        <button className='py-[10px]  px-[35px] font-thin rounded-full max-h-[45px] bg-[#f08f74] border-black border-[1px] center text-black'>
            {children}
        </button>
    );
};

export default Button;