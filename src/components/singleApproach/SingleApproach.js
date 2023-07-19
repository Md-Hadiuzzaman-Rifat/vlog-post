import React from 'react';
import "./SingleApproach.scss";
import { BsArrowRight } from "react-icons/bs";

const SingleApproach = ({title, count, details}) => {
    return (
        <div className='approachBox max-w-[200px]'>
            <h3 className='text-center'>{title}</h3>
            <h1 className='text-center'>{count}</h1>
            <p className='text-center'>{details}</p>
            <p className='text-center'><BsArrowRight></BsArrowRight></p>
        </div>
    );
};

export default SingleApproach;