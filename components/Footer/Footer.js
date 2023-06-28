import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "../layoutComponents";
import { FaPhone, FaRegClock } from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import FormFooter from "../Forms/FormFooter";
import Map from "../map";
import InstagramFeed from "../instagramFeed";
import { ButtonInline } from "../buttons";
import styles from "./Footer.module.scss";
import { StyleRegistry } from "styled-jsx";

const IconStyle = {
  color: "var(--clr-accent)",
};

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerWrapperTop}>
        <div className={styles.container}>
          <div className="container spacing">
            <center>
              <div className="spacing">
                <Image
                  width={300}
                  height={70}
                  src="/bc-logo.svg"
                  alt="edmonton mindset coach logo"
                />
              </div>
            </center>
            <hr />
            <div className={styles.flex}>
              <div className={styles.flex}>
                <div className="">
                  <div className="">
                    <h4 className="subheader">contact us</h4>
                    <ul>
                      <li>
                        <a
                          className={styles.contactLink}
                          href="tel: 403-909-1014"
                        >
                          <div>
                            <FaPhone style={IconStyle} />
                          </div>
                          403-909-1014
                        </a>
                      </li>
                      <li>
                        <a
                          className={styles.contactLink}
                          href="mailto: become.conquer.coaching@gmail.com"
                        >
                          <div>
                            <MdOutlineEmail style={IconStyle} />
                          </div>
                          become.conquer.coaching@gmail.com
                        </a>
                      </li>
                      <li>
                        <a
                          className={styles.contactLink}
                          href="#"
                          target="_blank"
                        >
                          <div>
                            <MdLocationOn style={IconStyle} />
                          </div>
                          Edmonton, AB
                        </a>
                      </li>
                      <li>
                        <a className={styles.contactLink} href="#">
                          <div>
                            <FaRegClock style={IconStyle} />
                          </div>
                          9 AM - 5 PM Mon - Fri
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.socials}>
                    <h4 className="subheader">let's connect!</h4>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/adriana.vandermerwe?mibextid=LQQJ4d"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/facebook.svg"
                          alt="edmonton mindset coach facebook"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/diana_coachingbc/?igshid=OGQ5ZDc2ODk2ZA=="
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/instagram.svg"
                          alt="edmonton indset coach instagram"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/@BecomeandConquer"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/youtube.svg"
                          alt="edmonton mindset coach youtube"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/adriana-van-der-merwe-94baa967/"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/linkedin.svg"
                          alt="edmonton mindset coach linkedin"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pageLinks}>
                <h4 className="subheader">Quick Links</h4>
                <ul>
                  <li>
                    <Link className={styles.styledLink} href="/">
                      home
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/about">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/coaching">
                      coaching
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/speaking">
                      speaking
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/contact">
                      contact & booking
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="subheader">email us</h4>
                <FormFooter />
              </div>
            </div>
            <hr />

            <div className={styles.copyright}>
              <ul>
                <li>Copyright&#169; 2023</li>
                <li>Become Conquer</li>
                <li>All Rights Reserved</li>
                <li>
                  <Link className={styles.a} href="/terms-of-use">
                    terms of use
                  </Link>
                </li>
                <li>
                  <Link className={styles.a} href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.author}>
              <div className="container">
                <div>
                  <p>website by: </p>
                  <a target="_blank" href="https://www.aarontonner.com">
                    <Image
                      className="img"
                      src="/aaron-tonner-web-solutions-logo-white-white.svg"
                      alt="aaron tonner web solutions logo"
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
