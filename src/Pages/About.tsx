import { divBg } from "../Components/BackgroundStyle";
import { RowPage } from "../Components/Flex";
import firstImg from "../assets/img/aboutOne.jpg";
import secondImg from "../assets/img/aboutTwo.jpg";
import thirdImg from "../assets/img/aboutThree.jpg";
import down from "../assets/img/down.png";
import logo from "../assets/img/logoOne.png";
import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";

const About=()=>{
    const bg = divBg(firstImg);
    return(
        <div className="">
            <Fade direction="down">
            <div className="page  d-flex flex-column align-items-center justify-content-center " style={bg}>
                <div className="bg-light p-5">
                    <h1 className="animate-character display-1">ABOUT US</h1>
                </div>
            </div>
            </Fade>
            <Container fluid>
            <Fade direction="down">
            <div className={RowPage}>
                <div className="col-sm">
                    <img className="img-fluid" src={logo} alt=""/>
                </div>
                <div className="col-sm">
                    <h1 className="display-1 animate-character">Introduction</h1>
                    <p>
                        <strong>Nemhs Construction Pvt Ltd</strong> is a registered construction company in Zimbabwe.
                        Our services include Property Development, Roads Construction, Water and
                        Sewer Reticulation Construction, Building Construction, Building Renovations, Paving works,
                        Driveways Construction, Tennis courts and all other construction services..
                    </p>
                </div>
                <div className="text-center">
                    <a href="#first">
                        <img src={down}  alt="scroll down"/>
                    </a>
                </div>
            </div>
            </Fade>
            <Fade direction="down">
            <div id="first" className={RowPage}>
                <div className="col-sm">
                    <img className="img-fluid imgBorder" src={secondImg} alt="service station picture"/>
                </div>
                <div className="col-sm order-md-first">
                    <h1 className="display-1 animate-character">VISION</h1>
                    <p>
                        <q>
                            <i>To be the best
                                service provider in our
                                field of works
                            </i>
                        </q>
                    </p>
                    <p>
                        We believe excellency is deliberate, and we choose excellency in every project we work on.
                        Time is one of the key aspects to any construction project and if any job is finished within its
                        projected time, quality is achieved, excellency is achieved, all this is achieved through proper
                        preplanning before works begin. 
                    </p>
                </div>
                <div className="text-center">
                    <a href="#second">
                        <img src={down}  alt="scroll down"/>
                    </a>
                </div>
            </div>
            </Fade>
            <Fade direction="down">
            <div id="second" className={RowPage}>
                <div className="col-sm">
                    <img className="img-fluid imgBorder" src={thirdImg} alt="picture of a construction site"/>
                </div>
                <div className="col-sm">
                    <h1 className="display-1 animate-character">MISSION</h1>
                    <p>
                        <q>
                            <i>
                                To make every client have the greatest experience while working with us.
                                To bring quality and durable work that will stand the test of time, making sure that every client has the 
                                greatest value of their money invested
                            </i>
                        </q>
                    </p>
                    <p>
                        We believe excellency is deliberate, and we choose excellency in every project we work on.
                        Time is one of the key aspects to any construction project and if any job is finished within its
                        projected time, quality is achieved, excellency is achieved, all this is achieved through proper
                        preplanning before works begin. 
                    </p>
                </div>
                <div className="text-center">
                    <a href="#third">
                        <img src={down}  alt="scroll down"/>
                    </a>
                </div>
            </div>
            </Fade>
            <Fade direction="down">
            <div id="third" className={`${RowPage} text-center`}>
                <div className="text-center">
                    <h1 className="display-1 animate-character">CORE VALUES</h1>
                </div>
                <div className="col-sm">
                    <h3 className=" animate-character">Integrity</h3>
                </div>
                <div className="col-sm">
                    <h3 className=" animate-character">Transparency</h3>
                </div>
                <div className="col-sm">
                    <h3 className=" animate-character">Excellency</h3>
                </div>
                <div className="col-sm">
                    <h3 className=" animate-character">Honesty</h3>
                </div>
                <div className="col-sm">
                    <h3 className=" animate-character">Resourcefulness</h3>
                </div>
                <div className="col-sm">
                    <h3 className=" animate-character">Creativity</h3>
                </div>
            </div>
            </Fade>
            </Container>
        </div>
    )
}

export default About;