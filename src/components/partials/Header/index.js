import styles from "./index.module.scss";
import Logo from "../../../../public/images/logo/logo.svg";
import NavItem from "@/components/UI/NavItem";

const Index = () => {

  const menu = [
    {
      title: "Home",
      link: "./",
      className:styles.nav__item
    },
    {
      title: "About",
      link: "./about",
      className:styles.nav__item
    },
  ]

  return (
    <div className={`${styles.wrapper} flex`}>
      <div className={styles.logo}>
        <img src={Logo.src} alt="Qonto" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {
            menu.map((item, index) => (
              <NavItem key={index} item={item} />
            ))
          }
        </ul>
      </nav>
    </div>
  );
}

export default Index;
