import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section className={styles.Container}>
      <article>
        <div className={styles.section}>
        <div className={styles.sectionInfo}>
          <div className={styles.parts}>
            <NavLink to="" className={styles.link}>BECOME A MEMBER</NavLink>
            <NavLink to="" className={styles.link}>SEND US A FEEDBACK</NavLink>
          </div>
          <div className={styles.parts}>
            <NavLink to="" className={styles.link}>GET HELP</NavLink>
            <div className={styles.partsLight}>
            <NavLink to="" className={styles.link}>Payment options</NavLink>
            <NavLink to="" className={styles.link}>Contact Us</NavLink>
            </div>
          </div>
          <div className={styles.parts}>
            <NavLink to="" className={styles.link}>
              ABOUT SNKRS
            </NavLink>
            <div className={styles.partsLight}>
            <NavLink to="" className={styles.link}>
              Sustainability
            </NavLink>
            <NavLink to="" className={styles.link}>
              We are team
            </NavLink>
            </div>
          </div>
        </div>
        
        <div className={styles.icon}>
        <BsTwitter />
        <BsFacebook />
        <BsInstagram />
        </div>
        </div>
      </article>

      <article >
        <div className={styles.copyright}>
        <div>
        © 2023 SNKRS, Inc. Todos los derechos reservados.
        </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
