//import React from 'react';
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "../../atoms/button";
import logo from "/logo.jpg";

export const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      <footer className={styles.piePagina}>
        <div className={styles.grupo1}>
          <div className={styles.box}>
            <figure className={styles.figure}>
              <Link to="" >
                <img src={logo} alt="" className={styles.image}/>
              </Link>
            </figure>
          </div>
          <div className={styles.box}>
            <h3>Menu 1</h3>
            <h3>Menu 2</h3>
            <h3>Menu 3</h3>
            <h3>Menu 4</h3>
          </div>
          <div className={`${styles.box} ${styles['box--box-button']}`}>
            <Button 
              size="medium" 
              className={styles.button}
              >Boton 1
            </Button>
            <Button 
              size="medium" 
              className={styles.button}
              variant="secondary"
              >Boton 2
            </Button>
          </div>
          <div className={`${styles.box} ${styles['box--box-info']}`}>
            <h3>+7 (495) 000-00-00</h3>
            <h3>Moscow,ul. Name d. 1</h3>
            <h3>mhenaoga@unal.edu.co</h3>
            <div className={styles.redes}>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                {" "}
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                {" "}
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.grupo2}>
          <small>
            &copy; 2024 <b>Repositorio de juegos</b>-Todos los derechos
            reservados
          </small>
          <small>Privacy Policy</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
