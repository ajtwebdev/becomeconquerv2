import React from "react";
import styled from "styled-components";
import { AnchorPrimary } from "./buttons";
import { Container, Section } from "./layoutComponents";
import Image from "next/image";

const Wrapper = styled.div`
  background: url("http://www.become-conquer.purpleparrotwebsites.com/wp-content/uploads/2023/06/mindset-coach-edmonton.png"),
    rgba(255, 255, 255, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em;
  position: relative;
  z-index: 2;
  height: 100%;
  min-height: 60vh;

  .finance-img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
  }
`;

export default function FinanceBanner() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <div>
            <h2 className="title">Join 75+ members in our Facebook Group!</h2>
          </div>
          <p>
            🤗Welcome to our transformative coaching community on Facebook! Join
            us for a supportive space where you can unlock your potential,
            embrace personal growth, and create positive changes. Our expert
            coach and speaker will guide you on a journey of self-discovery,
            resilience, and empowerment. Connect with like-minded individuals,
            gain valuable tools, and celebrate your successes. 🙋‍♀️Ready to unlock
            the extraordinary?
          </p>
          <AnchorPrimary
            target="_popup"
            href="https://www.facebook.com/groups/254319370592512/?ref=share&mibextid=S66gvF"
          >
            Join now!
          </AnchorPrimary>
        </Container>
      </Section>
    </Wrapper>
  );
}
