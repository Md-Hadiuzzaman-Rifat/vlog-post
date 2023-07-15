import Image from "next/image";
import React from "react";
import "./BlogGallery.scss"

const BlogGallery = () => {
  return (
    <div className="Gallery">
      <div className="resize_RowToColumn gap-5 md:justify-between">
        <div style={{ flex: 2 }}>
          <Image
            style={{ height: "400px", objectFit: "cover", borderRadius: "5%" }}
            src="/sq1.jpg"
            width={400}
            height={400}
            alt="discuss"
          ></Image>
        </div>
        <div style={{ flex: 3 }}>
          <Image
            style={{
              objectFit: "cover",
              width: "700px",
              height: "400px",
              borderRadius: "5%",
            }}
            src="/sq2.jpg"
            width={400}
            height={400}
            alt="dedication"
          ></Image>
        </div>
      </div>
      <div className="story resize_RowToColumn mt-24">
        <div style={{flex:2}} className="custom-p">OUR STORY.</div>
        <div style={{flex:5}} className="custom-h1 blog-body">
          GeekFolio are digital marketing experts and can partner with you to
          implement tactical campaigns which engage and connect audiences whilst
          driving ROI for your brand. We are SEO and SEM professionals and have
          implemented successful search campaigns for clients which drive
          super-charge improvements in organic rankings, increase visits and
          grow revenue.
        </div>
      </div>
    </div>
  );
};

export default BlogGallery;
