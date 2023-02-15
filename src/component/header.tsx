import React, { useContext } from "react";
import styles from "../styles/header.module.css";
import { HiMenu, HiChatAlt } from "react-icons/hi";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerMenuIcon}>
        <HiMenu className={styles.icon} />
        <h1 className={styles.h1text}>Product Dashboard</h1>
      </div>
      <div className={styles.headerMenuIcontac}>
        <HiChatAlt className={styles.icon1} />
        <p className={styles.text}>初め</p>
      </div>
    </div>
  );
};

export default Header;
