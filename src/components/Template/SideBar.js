import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vedanshi Gupta</h2>
        <p>
          <a href="mailto:vedanshigupta158@gmail.com">vedanshigupta158@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Vedanshi. I am a student at{' '} <a href="https://kmclu.ac.in/">KMCLU</a> pursuing Bachelors of Technology from the field of Bio-Technology. </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/stats" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Vedanshi Gupta <Link to="/">vedanshigupta.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
