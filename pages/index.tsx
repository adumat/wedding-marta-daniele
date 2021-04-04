import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from './navbar';
import Section from './section'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Marta &amp; Daniele</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Section
        title="Section 1"
        subtitle={"fsf"}
        dark={true}
        id="section1"
        height="500px"
      />
      <Section
        title="Section 2"
        subtitle={"fsf"}
        dark={false}
        id="section2"
        height="500px"
      />
      <Section
        title="Section 3"
        subtitle={"fsf"}
        dark={true}
        id="section3"
        height="500px"
      />
      <Section
        title="Section 4"
        subtitle={"fsf"}
        dark={false}
        id="section4"
        height="500px"
      />
    </div>
  )
}