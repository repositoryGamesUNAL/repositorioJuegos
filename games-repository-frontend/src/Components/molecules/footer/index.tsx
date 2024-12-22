//import React from 'react';
import "./Style.scss";
import Button from "../../atoms/button";
import logo from "./logoprototipo.png";

export const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <figure>
              <a href="#">
                <img src={logo} alt="Logo Prototipo" />
              </a>
            </figure>
          </div>
          <div className="box">
            <h3>Menu 1</h3>
            <h3>Menu 2</h3>
            <h3>Menu 3</h3>
            <h3>Menu 4</h3>
          </div>
          <div className="box">
            <Button>Boton 1</Button>
            <Button>Boton 2</Button>
          </div>
          <div className="box">
            <h3>+7 (495) 000-00-00</h3>
            <h3>Moscow,ul. Name d. 1</h3>
            <h3>mhenaoga@unal.edu.co</h3>
            <div className="red-social">
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
        <div className="grupo-2">
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
