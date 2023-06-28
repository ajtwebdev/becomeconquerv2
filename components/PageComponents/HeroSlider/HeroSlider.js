import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "components/buttons";
import {
  Actions,
  Container,
  HeroBannerPadding,
} from "components/layoutComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from "./HeroSlider.module.scss";
import Image from "next/image";

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
};

export default function HeroSlider({ title }) {
  return (
    <div className={styles.wrapper}>
      <div className="heroBannerPadding" />
      <div className={styles.heroWrapper}>
        <div className={styles.heroGrid}>
          <Carousel>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <Image
                  // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/under-deck-lighting-calgary.png"
                  src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
                  width={1200}
                  height={100}
                  priority={true}
                />
                {/* <div className={styles.content1} /> */}
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h1 className="title">calgary's premier deck builder</h1>
                  <p className="subheader tan">a style from the ground up</p>
                  <ButtonPrimary href="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <Image
                  // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-3.webp"
                  src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
                  width={1200}
                  height={100}
                  priority={true}
                />
                {/* <div className={styles.content2} /> */}
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">expand your outdoor living</h2>
                  <p className="subheader tan">Looking for inspiration?</p>
                  <ButtonPrimary href="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <Image
                  // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-1.webp"
                  src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
                  width={1200}
                  height={100}
                  priority={true}
                />
                {/* <div className={styles.content3} /> */}
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">take a step outdoors</h2>
                  <p className="subheader tan">
                    Ready to plan your 2023 deck build?
                  </p>
                  <ButtonPrimary href="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.heroBottomText}>
          <div className="container">
            <p>
              If you're in search of a Calgary deck builder near you, look no
              further than Project Landscape. We offer a wide range of colors,
              styles and maintenance free options to enhance the aesthetic
              appeal of your deck. Let Project Landscape help you build the
              outdoor living space of your dreams!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
