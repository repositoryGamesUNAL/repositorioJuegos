import Input from "../../atoms/input"
import Button from "../../atoms/button"
import styles from "./styles.module.scss"
import logo from "./gohan_nojao.jpg"
export const Header: React.FC = ()=>{

  return (
  <header className={styles.header}>
    <div className={styles["top-bar"]}>
        <figure>
        <img src={logo} className={styles["logo"]} alt="Logo Prototipo" />
        </figure>
        <div className="search-bar">
            
            <Input/ >
            <Button>search</Button>

        </div>
        <div className="auth-links">
            <Button >SVSF</Button>
            <Button >sign up</Button>
        </div>
    </div>
</header>);
}