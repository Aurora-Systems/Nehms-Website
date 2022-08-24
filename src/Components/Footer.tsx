import { RowPage } from "./Flex";

const Footer=()=>{
    return(
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-sm">
                    <a>Portfolio</a>
                </div>
                <div className="col-sm">
                    <p>+263 773 451 050 / +263 774 602 480</p>
                    <p>info@nehmsconstruction.co.zw</p>
                    <p>Privacy Policy</p>
                    <p>Careers</p>
                </div>
                <div className="col-sm">
                    <small>© {new Date().getFullYear()}</small>
                    <br/>
                    <small><a href="" target="_blank">Designed By Aurora</a></small>
                </div>
            </div>
        </div>
    )
}

export default Footer;