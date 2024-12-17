import React from "react"
import styles from "./header.css"
import Input from "../../atoms/input/input"

const Header:React.FC = ()=>{
    return(
    <>
        <header>
            <div id="placeholder-bar">
                <figure>
                    <img>
                    </img>
                </figure>
                <div class="num-bar-element">
                    <span>
                        +7(495)000-00-00
                    </span>
                    <span>
                        mon-fri 9:00-18:00
                    </span>
                </div>
                <div class={"email-barElement"}>
                    <span>
                        Email@email.ru
                    </span>
                    <span class="undeline-text">
                        leave a request
                    </span>
                </div>
                <Input width={54}>
                </Input>
                <div class="auth-links">
                    <a></a>
                    <a></a>
                </div>
            </div>
            <div id="navigation-bar">
                <div>
                    menu1
                </div>
                <div>
                    menu2
                </div>
                <div>
                    menu3
                </div>
                <div>
                    menu4
                </div>
                <div>
                    menu5
                </div>
                <div>
                    menu6
                </div>    
            </div>
        </header>
    </>)
}
export default Header;