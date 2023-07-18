"use client";
import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./scroll.scss";
import Image from "next/image";
import CircleBtn from "../circleBtn/CircleBtn";

export default function Scroll() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div className=" mb-20 block min-h-[120vh] ">
      <div className={styles.background}/>
      <Parallax pages={4} className="overflow-y-scroll no-scrollbar">
        <ParallaxLayer
          sticky={{ start: 0, end: 2 }}
          style={{ ...alignCenter, justifyContent: "flex-start", opacity: 1 }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <Image
            style={{height:"110vh", width:"90%"}}
              src="/book1.jpg"
              width={400}
              height={600}
              alt="book 1"
            ></Image>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={5.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p className="custom-p">01. DIGITAL </p>
            <h1 className="custom-h1">Luxury Glassware.</h1>
            <p className="custom-p">
              We craft premium designs for agencies and global brands around the
              globe.
            </p>
            <ul>
              <li> Make your business visible online.</li>
              <li> Make your eCommerce business stand out.</li>
              <li>Grow with your audience.</li>
            </ul>
            <CircleBtn></CircleBtn>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p className="custom-p">01. DIGITAL </p>
            <h1 className="custom-h1">Luxury Glassware.</h1>
            <p className="custom-p">
              We craft premium designs for agencies and global brands around the
              globe.
            </p>
            <ul>
              <li> Make your business visible online.</li>
              <li> Make your eCommerce business stand out.</li>
              <li>Grow with your audience.</li>
            </ul>
            <CircleBtn></CircleBtn>
          </div>
        </ParallaxLayer>


        <ParallaxLayer
        speed={0}
          sticky={{ start: 2, end: 4 }}
          style={{ ...alignCenter, justifyContent: "flex-start", opacity: 1 }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <Image
              src="/book2.jpg"
              style={{height:"110vh", width:"90%"}}
              width={400}
              height={600}
              alt="book 1"
            ></Image>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p className="custom-p">01. DIGITAL </p>
            <h1 className="custom-h1">Luxury Glassware.</h1>
            <p className="custom-p">
              We craft premium designs for agencies and global brands around the
              globe.
            </p>
            <ul>
              <li> Make your business visible online.</li>
              <li> Make your eCommerce business stand out.</li>
              <li>Grow with your audience.</li>
            </ul>
            <CircleBtn></CircleBtn>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p className="custom-p">01. DIGITAL </p>
            <h1 className="custom-h1">Luxury Glassware.</h1>
            <p className="custom-p">
              We craft premium designs for agencies and global brands around the
              globe.
            </p>
            <ul>
              <li> Make your business visible online.</li>
              <li> Make your eCommerce business stand out.</li>
              <li>Grow with your audience.</li>
            </ul>
            <CircleBtn></CircleBtn>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}
