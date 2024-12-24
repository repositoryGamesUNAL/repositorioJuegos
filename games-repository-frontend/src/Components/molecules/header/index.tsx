import Input from "../../atoms/input";
import Button from "../../atoms/button";
import styles from "./styles.module.scss";
import { routes } from "./routes.config";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles["top-bar"]}>
                <figure>
                {/* Logo del sitio */}
                {/* <img src={logo} className={styles.logo} alt="Logo Prototipo" /> */}
                </figure>
                <div className={styles["search-box"]}>
                    <Input />
                    <Button>Search</Button>
                </div>
                <div className={styles["user-actions"]}>
                    <Button>Login</Button>
                    <Button>Sign Up</Button>
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
