import { RowPage } from "./Flex";
import logo from "../assets/img/logoTwo.png"
import facebook from "../assets/img/facebook.png"
import linkedin from "../assets/img/linkedin.png"
import instagram from "../assets/img/instagram.png"


const Footer=()=>{
    return(
        <div className="container-fluid p-5 bg-light">
            <div className="row text-center">
                <div className="col-sm">
                    <img className="img-fluid" width="200" src={logo} alt="Nehms construction logo"/>
                </div>
                <div className="col-sm">
                    <b>Contact Us</b>
                    <p>
                        <img src={facebook} className="pointer" alt=""/>&nbsp;
                        <img src={instagram} className="pointer" alt=""/>&nbsp;
                        <img src={linkedin} className="pointer" alt=""/>
                    </p>
                    <p>+263 773 451 050 / +263 774 602 480</p>
                    <a href="mailto:info@nehmsconstruction.com" target="_blank">info@nehmsconstruction.com</a>
                    <br/>
                    
                </div>
                <div className="col-sm">
                    <p>© {new Date().getFullYear()} <a href="" target="_blank">Designed By Aurora</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;