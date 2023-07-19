import React from 'react';
import Box from '../box/Box';
import "./FeatureBox.scss"

const details=[
    {
        id:1,
        img:"/0.png",
        title:"Brand Strategy & Art Direction"
    },
    {
        id:2,
        img:"/1.png",
        title:"UX/UI Design & Website/App Design"
    },
    {
        id:3,
        img:"/2.png",
        title:"Engage your customers dramatically."
    }
]

const FeatureBox = () => {
    return (
        <div className="custom_grid">
            {
                details.map((single)=><Box key={single.id} img={single.img} title={single.title}/>)
            }
        </div>
    );
};

export default FeatureBox;