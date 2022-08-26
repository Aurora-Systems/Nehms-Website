import mapImg from "../assets/img/map.png"
import { RowPage } from "../Components/Flex";

const Contact=()=>{
    return(
        <div className="container-fluid">
            <div className={RowPage}>
                <div className="col-sm">
                    <div className="img-hover-zoom pointer">
                        <img className="img-fluid imgBorder" src={mapImg} alt=""/>
                    </div>
                </div>
                <div className="col-sm">
                    <h1 className="display-1 animate-character">Vist our Offices</h1>
                    <button className="btn generalBtn animate-character">Send a Message</button>
                </div>
            </div>

        </div>
    )
}

export default Contact;