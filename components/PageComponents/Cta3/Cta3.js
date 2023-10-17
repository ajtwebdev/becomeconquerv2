import React from "react";
import { Container, Section } from "components/layoutComponents";
import styled from "styled-components";
import { ButtonSecondaryDark } from "components/buttons";

const Wrapper = styled.div`
  color: var(--txt-light);
  background: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export default function Cta3({ title, description, image }) {
  return (
    <Wrapper img={image.sourceUrl}>
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title bold">
              together let's turn your{" "}
              <span className="italics dark-secondary">
                mess into your mastery
              </span>
            </h2>
            <p>
              Together, we’ll rewrite your story by breaking through trauma,
              unveiling a new path of personal growth, resilience, & boundless
              success.
            </p>
            <ButtonSecondaryDark href="/booking">
              get your free consultation &#8594;
            </ButtonSecondaryDark>
          </Text>
        </Container>
      </Section>
    </Wrapper>
  );
}
