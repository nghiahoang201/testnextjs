import Link from "next/link";
import styles from "../styles/navbar.module.css";

interface nav {
  textnav: string;
}

const Navs: nav[] = [
  { textnav: "KGI Dashboard" },
  { textnav: "Product Dashboard" },
];

const NavBar: React.FC = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.textnav}>
          {Navs.map((itemText, index) => (
            <div key={index}>
              <Link href="/content1" className={styles.link}>
                <p className={styles.text}>{itemText.textnav}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
