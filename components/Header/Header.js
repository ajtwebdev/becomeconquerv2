import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Flex } from "components/layoutComponents";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useLockedBody } from "usehooks-ts";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

const device = {
  sm: "18em",
  md: "70em",
};

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & > * + * {
    margin-left: 1.5em;
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    align-items: center;
    position: absolute;
    top: 125px;
    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: var(--clr-light);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    border-top: 1px solid var(--txt-dark-secondary);
    padding: 1em 2em 16em 2em;

    height: 100vh;
    overflow: auto;

    // & > * + * {
    //   margin-left: 0;
    //   margin-top: 15px;
    // }
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--clr-accent);

    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
    }
  }

  @media screen and (max-width: ${device.md}) {
    transform: scale(1);
    display: block;
    z-index: 10000;
  }
`;

export default function HeaderBasic() {
  const [nav, navOpen] = useState(false);

  const { asPath } = useRouter();

  // console.log({params})

  const [locked, setLocked] = useLockedBody(false, "__next");

  const toggleLocked = () => {
    setLocked(!locked);
  };

  function toggleMenu() {
    navOpen(!nav);
    // toggleLocked();
  }

  useEffect(() => {
    navOpen(false);
  }, [asPath]);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headertop}>
          <div className={styles.containerTop}>
            <ul>
              <li>
                <div className={styles.navLinkTop} href="tel: 403-909-1014">
                  <div>
                    <FaPhone />
                  </div>
                  403-909-1014
                </div>
              </li>
              <li>
                <div
                  className={styles.navLinkTop}
                  href="mailto: become.conquer.coaching@gmail.com"
                >
                  <div>
                    <MdOutlineEmail />
                  </div>
                  become.conquer.coaching@gmail.com
                </div>
              </li>
              <li>
                <div className={styles.navLinkTop} href="#" target="_blank">
                  <div>
                    <MdLocationOn />
                  </div>
                  Edmonton, AB
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.headerbottom}>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <Link className={styles.styledLink} href="/">
                <div>
                  <h3 className=" light">become & conquer</h3>
                  <p className="sig light">with adriana</p>
                </div>
                {/* <Image
                  src="/bc-logo.svg"
                  alt="mindset coach logo"
                  height={100}
                  width={170}
                /> */}
              </Link>
            </div>
            <nav className={styles.nav}>
              <Burger nav={nav} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </Burger>
              <NavList nav={nav}>
                <li>
                  <Link className={styles.styledNavLink} href="/about">
                    about
                  </Link>
                </li>
                <li>
                  <Link className={styles.styledNavLink} href="/coaching">
                    coaching
                  </Link>
                </li>
                <li>
                  <Link className={styles.styledNavLink} href="/speaking">
                    speaking
                  </Link>
                </li>
                <li>
                  <Link className={styles.styledNavLink} href="/contact">
                    contact
                  </Link>
                </li>
                <li>
                  <Link className={styles.getQuote} href="/booking">
                    free consultation &#8594;
                  </Link>
                </li>
              </NavList>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
