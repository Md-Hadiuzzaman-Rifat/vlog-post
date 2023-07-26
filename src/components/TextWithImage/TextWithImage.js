import Image from 'next/image';
import React from 'react';

const TextWithImage = () => {
    return (
        <div>
          <div className="relative">
            <Image
              src="/cartoon.jpg"
              className="max-w-[450px] h-fit"
              width={400}
              height={400}
              alt="Cartoon Image"
            ></Image>
            <div className="absolute top-[60%] left-[20%]">
              <div className="bg-black max-w-[400px] p-6">
                <Image src="/0.png"  width={60} height={60} alt="container"></Image>
                <p className="my-6">We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default TextWithImage;