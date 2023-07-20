import React from "react";
import styled from "styled-components";
import { Container, Section, Flex } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Image from "../../Image";
import { BsFillLightningChargeFill, BsPersonCircle } from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Text = styled.div``;

const List = styled.div``;

const ListFlex = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 32em) {
    flex-direction: column;
  }
`;

const Img = styled.div`
  figure {
    div {
      // box-shadow: 20px -20px 0px 1px var(--clr-accent);
      img {
        max-height: 600px;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }
`;

const IconStyle = {
  fontSize: "70px",
  color: "var(--clr-accent)",
  paddingRight: "5px",
};

export default function Plans1({ subheader, title, text, image }) {
  return (
    <Section>
      <Container className="spacing">
        <Flex>
          <div className="spacing">
            <Text className="spacing">
              <div>
                <p className="subheader accent">{subheader}</p>
                <h2 className="title bold">{title}</h2>
              </div>
            </Text>
            <List className="spacing">
              <ListFlex>
                <BsFillLightningChargeFill style={IconStyle} />
                <div>
                  <h3 className="bold subheader">
                    Cultivate Emotional Strength
                  </h3>
                  <p>
                    Develop resilience and emotional intelligence to navigate
                    life's challenges with grace and poise. Gain the ability to
                    stay centered and composed in the face of adversity,
                    empowering you to make better decisions.
                  </p>
                </div>
              </ListFlex>
              <ListFlex>
                <BsFillLightningChargeFill style={IconStyle} />
                <div>
                  <h3 className="bold subheader">
                    Become A Confident Decision Maker
                  </h3>
                  <p>
                    Learn effective decision-making strategies that with your
                    true desires and values. Say goodbye to second-guessing and
                    hesitation as you step into a new era of clarity and
                    conviction.
                  </p>
                </div>
              </ListFlex>
              <ListFlex>
                <BsFillLightningChargeFill style={IconStyle} />
                <div>
                  <h3 className="bold subheader">Find Your Authentic Voice</h3>
                  <p>
                    Break free from the limitations imposed by others and
                    discover your own unique identity. Unleash the power of
                    self-expression and confidently share your thoughts,
                    opinions, and ideas with the world.
                  </p>
                </div>
              </ListFlex>
            </List>
            <hr />
            <p>{text}</p>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: `${text}`,
              }}
            ></div> */}
            <ButtonPrimary href="/contact">
              book a free 30-minute consultation &#8594;
            </ButtonPrimary>
          </div>
          <Img>
            <Image
              className="stretch img-right"
              alt={image.altText || ""}
              srcSet={image.srcSet}
              src={image.sourceUrl}
            />
          </Img>
        </Flex>
      </Container>
    </Section>
  );
}
