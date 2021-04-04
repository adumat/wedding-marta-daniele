import React from "react";
import styles from '../styles/Home.module.css';

export default function Section({ title, subtitle, dark, id, height }) {
  return (
    <div className={styles.section + (dark ? ` ${styles.sectionDark}` : "")} style={{height}}>
      <div className={styles.sectionContent} id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
