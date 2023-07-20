import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Section } from "components/layoutComponents";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const ReviewWrapper = styled.div`
  border: 3px solid var(--clr-accent);
  border-radius: var(--br);
  padding: 2em;
  background: rgba(0, 0, 0, 0.7);
  color: var(--txt-light);
  text-align: center;

  h3,
  p {
    max-width: 90ch;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Wrapper = styled.div`
  background: url("http://www.become-conquer.purpleparrotwebsites.com/wp-content/uploads/2023/06/image-16.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 24px;
  }
`;

const FlexStars = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 2px;
  }

  & > * {
    color: var(--clr-accent);
  }
`;

const ReviewBox = (props) => {
  return (
    <ReviewWrapper className="spacing">
      <h3 className="title caps italics">~ {props.title} ~</h3>
      <p className="italics">"{props.review}"</p>
      <p className="bold caps">{props.name}</p>
      <FlexStars>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </FlexStars>
    </ReviewWrapper>
  );
};

export default function Testimonial({ title, testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Section>
        <Container>
          <SliderWrapper>
            <Slider {...settings}>
              <ReviewBox
                title="I'm focused and motivated in the face of adversity"
                review="I recently had the privilege of working with Adriana as my motivational coach and I have to say it was a life changing experience. She has a Unique ability to Connect with people and bring the best in them. Her passion for personal development is impressive and she truly knows how to inspire and motivate others."
                name="​Gabriela S, Calgary, AB"
              />
              <ReviewBox
                title="real results happened fast for me"
                review="Adriana created a transformational experience true to the word. A dear friend of mine was sharing about his experience with her work, and I sensed a solid experience is available."
                name="Aly Y, British Columbia"
              />
              <ReviewBox
                title="her wisdom elevated my mindset"
                review="For years, I have been struggling with being a people pleaser. Thinking I was doing the right thing in helping people to only find out I had been sacrificing my life, my energy, always feeling tired. After a few coaching sessions with Adriana, I regained control of my life, feeling empowered, feeling happy, loving life on a whole new level."
                name="William C, Edmonton, AB"
              />
              {/* {testimonials.map(testimonial => {
                return (
                  <ReviewBox
                    title={testimonial.testimonialTitle}
                    review={testimonial.testimonialBody}
                    name={testimonial.testimonialName}
                  />
                )
              })} */}
            </Slider>
          </SliderWrapper>
        </Container>
      </Section>
    </Wrapper>
  );
}
