import mapImg from "../assets/img/map.png"
import { RowPage } from "../Components/Flex";

const Contact=()=>{
    return(
        <div className="container-fluid">
            <div className={RowPage}>
                <div className="col-sm">
                    <div className="img-hover-zoom pointer">
                        <img className="img-fluid imgBorder" src={mapImg} alt="" onClick={()=>{window.open("https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D-17.8639%252C31.0297%26fbclid%3DIwAR3NH7zznpV6mD1zN_jwErLSRHg170k98e8QaPNjsuBNA-j2P0uV9JkyPP8&h=AT2Z_FfbQu6j9cvrIx90Yx0bfefpYXKXHbWiJfvxJdcpRw7wAN7hd3kW2eVqiswaBS0sn_US5basACK8H99dl2aJGdNODewj-BbpX7NARV5WUkE2WG0DgHo_-VyIwDWJVge9GA","_blank")}}/>
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