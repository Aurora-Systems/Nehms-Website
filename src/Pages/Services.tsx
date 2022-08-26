import { divBg } from "../Components/BackgroundStyle";
import { Carousel, Container } from "react-bootstrap";
import bg from "../assets/img/serviceOne.jpg";
import secondImg from "../assets/img/serviceTwo.jpg";
import thirdImg from "../assets/img/serviceThree.jpg";
import fourthImg from "../assets/img/serviceFour.jpg";
import fifthImg from "../assets/img/serviceFive.jpg";
import { RowPage } from "../Components/Flex";

const Services=()=>{
    return(
        <div>
             <div className="page  d-flex flex-column align-items-center justify-content-center " style={divBg(bg)}>
                <div className="bg-light p-5">
                    <h1 className="animate-character display-1">SERVICES</h1>
                </div>
            </div>
            <div className={RowPage}>
                    <div className="col-sm">
                        <Carousel>
                        <Carousel.Item>
                                <img src={thirdImg} className="d-block w-100"/>
                                <Carousel.Caption>
                                    <h1>Roadworks</h1>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={bg} className="d-block w-100 imgBorder"/>
                                <Carousel.Caption>
                                    <h1>Building Construction</h1>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={fifthImg} className="d-block w-100"/>
                                <Carousel.Caption>
                                    <h1>Paving</h1>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={secondImg} className="d-block w-100"/>
                                <Carousel.Caption>
                                    <h1>Stone Work</h1>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={fourthImg} className="d-block w-100"/>
                                <Carousel.Caption>
                                    <h1>Stormwater Drains</h1>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        
                    </div>
                    <div className="col-sm ">
                        <h1 className="animate-character display-1">SNAPSHOT</h1>
                        <p><q><i>A world which sees art and construction as divided is not seeing the world as a whole</i></q></p>
                        <b>Sir Edmund Happold</b>
                    </div>
                </div>
            <Container fluid>
                
                <div className={RowPage}>
                    <div className="col-sm text-center">
                        <h1 className="animate-character display-1">Civil Engineering</h1>
                        <p className="animate-character">Road Works</p>
                        <p className="animate-character">Sewer & Water Reticulation</p>
                        <p className="animate-character">Retaining Walls</p>
                        <p className="animate-character">Stone Work</p>
                    </div>
                    <div className="col-sm text-center">
                        <h1 className="animate-character display-1">Building Construction</h1>
                        <p className="animate-character">House Construction</p>
                        <p className="animate-character">Multi Storey Structures</p>
                        <p className="animate-character">Concrete Works</p>
                        <p className="animate-character">Institutions (Schools, Hospitals)</p>

                    </div>
                </div>
                <div className="text-center">
                    <div className="col-sm text-center">
                        <h1 className="animate-character display-1">Consultancy Services</h1>
                        <p className="animate-character">Civil Engineering, Achitectural & Structural Designs</p>
                        <p className="animate-character">Bill of Quantities Production</p>
                        <p className="animate-character">Surveying Services</p>
                        <p className="animate-character">Project Management</p>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services;