import React from "react";
import styled from "styled-components";
import { Container, GridThree, Section } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Image from "../../Image";

// const StyledImg = styled(GatsbyImage)`
//   max-height: 100px;
//   max-width: 100px;
// `

const device = {
  md: "48em",
};

const BenefitItem = styled.div`
  border: 2px solid var(--clr-tan);
  padding: 2em;
  max-width: 1200px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid var(--clr-accent);
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
    figure {
      div {
        clip-path: polygon(
          100% 0%,
          90% 50%,
          100% 100%,
          25% 100%,
          10% 51%,
          25% 0%
        );
        img {
        }
      }
    }
    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }
  }

  figure {
    div {
      clip-path: polygon(75% 0%, 90% 52%, 75% 100%, 0% 100%, 10% 51%, 0% 0%);
      img {
      }
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Benefits1({ subheader, title, benefitContent }) {
  let width = "auto";
  let height = "800px";
  return (
    <Section>
      <Container className="spacing-md">
        <div className="center">
          <p className="subheader accent">{subheader}</p>
          <h2 className="title">{title}</h2>
        </div>
        <Flex>
          {benefitContent.map((benefit) => {
            return (
              <BenefitItem className="spacing center">
                <Image
                  alt={benefit.image.altText || ""}
                  srcSet={benefit.image.srcSet}
                  src={benefit.image.src}
                  width={width}
                  height={height}
                />
                <div className="spacing">
                  <h3 className="subheader bold caps">{benefit.title}</h3>
                  {benefit.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${benefit.description}`,
                      }}
                    />
                  ) : null}
                </div>
              </BenefitItem>
            );
          })}
        </Flex>
        <center>
          <ButtonPrimary href="/contact">book your consultation</ButtonPrimary>
        </center>
      </Container>
    </Section>
  );
}
