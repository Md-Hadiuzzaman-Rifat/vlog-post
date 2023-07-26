import Image from "next/image";
import React from "react";
import AccordionModal from "../accordionModal/AccordionModal";
const Accordion = () => {
  return (
    // shadow on the accordion
    <div className="accordion mt-8 mb-24">
      <div className="flex flex-col">
        <div className="self-end opacity-25">
          <Image width={150} height={100} src="/shap2.png" alt="design"></Image>
        </div>
        {/* main accordion start  */}
        <div className="accordion_main gap-12 flex flex-col md:flex-row justify-between items-center min-h-screen mt-8">
          <div className="accordion_main_image w-10/12">
            <Image
              style={{ flex: 1 }}
              src="/a1.png"
              width={500}
              height={200}
              alt="accordion-image"
            ></Image>
          </div>
          {/* // real accordion  */}
          <div style={{ width: "70%" }}>
            <h3 className="font-bold mb-8 text-3xl mb-6 text-white">
              We grow brands through bold & strategic creative
            </h3>
            <AccordionModal></AccordionModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
