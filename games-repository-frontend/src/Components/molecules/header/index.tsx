import Input from "../../atoms/input";
import Button from "../../atoms/button";
import styles from "./styles.module.scss";

import { routes } from "./routes.config";
import { NavLink } from "react-router-dom";

import InputSearch from "../../atoms/inputSearch/index"
export const Header: React.FC = () => {
  const handleSignUpClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log("Sign up link clicked without page reload");
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        
        <div className={styles.rigthcontainer}>
        <div className={styles.searchDiv}>
          <Button  size="small">Search</Button>
          <InputSearch />
        </div>
        <div className={styles.authLinks}>
          <a href="#" onClick={handleSignUpClick} className={styles.login}>
            Login
          </a>
          <a href="#" onClick={handleSignUpClick} className={styles.signUp}>
            Sign Up
          </a>
        </div>
        </div>
      </div>
      <nav className={styles.navbar}>
                <ul className={styles.navbarList}>
                {routes.map((route, index) => (
                    <li key={index} className={styles.navbarItem}>
                        <NavLink
                            to={route.path}
                            className={({ isActive }) =>
                                `${styles.navbarItem} ${isActive ? styles.active : ""}`
                            }
                        >
                            {route.name}
                        </NavLink>
                    </li>
                ))}
                </ul>
            </nav>
    </header>
  );

};
