import React from "react";
import styled from "styled-components";
import { Container, Section, Flex } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Image from "../../Image";
import { BsFillLightningChargeFill, BsPersonCircle } from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Text = styled.div``;

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  li {
    line-height: 1.1;
    display: flex;
    align-items: center;
    font-size: var(--fs-2);
    text-transform: capitalize;
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
  paddingRight: "15px",
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
            <List className="bold spacing">
              <li>
                <BsFillLightningChargeFill style={IconStyle} /> Supercharged
                signature “KICK STARTER CHALLENGE” <br />
              </li>
              <li>
                <GiTalk style={IconStyle} />
                Weekly one-on-one meetings for unwavering support & guidance
              </li>
              <li>
                <BsPersonCircle style={IconStyle} />A powerful meditation
                written & audio record (a letter from your future self)
              </li>
              <li>
                <BiSupport style={IconStyle} /> 24/7 Support
              </li>
            </List>
            <hr />
            <p>{text}</p>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: `${text}`,
              }}
            ></div> */}
            <ButtonPrimary href="/contact">
              book a free 90-minute consultation &#8594;
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
