import React from 'react';

const ServiceContent = () => {
    return (
        <div>
          <div className="flex items-center mt-8">
            <p className="text-xl font-bold mr-8">01</p>{" "}
            <span className="custom-h1">UI/UX Design</span>
          </div>
          <div className="flex items-center mt-8">
            <p className="text-xl font-bold mr-8">02</p>{" "}
            <span className="custom-h1">Branding</span>
          </div>
          <div className="flex items-center mt-8">
            <p className="text-xl font-bold mr-8">03</p>{" "}
            <span className="custom-h1">Development</span>
          </div>
          <div className="flex items-center mt-8">
            <p className="text-xl font-bold mr-8">04</p>{" "}
            <span className="custom-h1">Marketing</span>
          </div>
        </div>
    );
};

export default ServiceContent;