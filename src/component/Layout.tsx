import React, { useState } from "react";
import Header from "./header";
import NavBar from "./navbar";
import styles from "../styles/body.module.css";
import { createContext } from "react";

interface LayoutComponent {
  children: React.ReactNode;
}

export const ValuesContext = createContext(null);

const Layout: React.FC<LayoutComponent> = ({ children }) => {
  const [nav, setNav] = useState(false);

  const Values = { nav, setNav };
  return (
    <>
      <ValuesContext.Provider value={Values}>
        <Header />
        <div className={styles.bodynav}>
          <NavBar />
          <div className={styles.bodychil}>{children}</div>
        </div>
      </ValuesContext.Provider>
    </>
  );
};

export default Layout;
