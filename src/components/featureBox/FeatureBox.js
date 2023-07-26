import React from 'react';
import Box from '../box/Box';
import "./FeatureBox.scss"


const FeatureBox = ({details, bg}) => {
    return (
        <div className="resize_RowToColumn">
            {
                details.map((single)=><Box key={single.id} img={single.img} title={single.title}/>)
            }
        </div>
    );
};

export default FeatureBox;