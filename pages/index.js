import React, { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import Head from 'next/head';
import Intro from '../components/Intro';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import CallToAction from '../components/CallToAction';
import FunFacts from '../components/FunFacts';
import Footer from '../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>developer</title>
        <meta
          name="description"
          content="Web designer, web developer, website designer, WordPress website designer and developer, web application, web app, react js, next js"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      {loading ? (
        <div className="loading">
          <HashLoader color={'#fffd700'} loading={loading} size={40} />
        </div>
      ) : (
        <>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <Intro />
          <About />
          <Portfolio />
          <CallToAction />
          <Testimonials />
          <Contact />
          <FunFacts />
          <Footer />
        </>
      )}
    </div>
  );
}
