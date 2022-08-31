import { RowPage } from "../Components/Flex";
import { Carousel, Container } from "react-bootstrap";
import logo from "../assets/img/logoTwo.png";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    

    return (
        <div className=" m-0" >
            <Fade direction="down">
                <Carousel fade >
                    <Carousel.Item>
                        <img 
                            src="https://ardfacia.sirv.com/img/homeTwoImg.jpg"
                            className="d-block w-100" 
                            alt=""
                        />
                        <Carousel.Caption className="">
                            <img src={logo} className="img-fluid w-100"/>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src="https://ardfacia.sirv.com/img/homeThreeImg.jpg"
                            className="d-block w-100" 
                            alt=""
                        />
                        <Carousel.Caption>
                            <h1 className="">
                                <img src={logo} className="img-fluid w-100"/>
                            </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src="https://ardfacia.sirv.com/img/homeFourImg.jpg"
                            className="d-block w-100" 
                            alt=""
                        />
                        <Carousel.Caption >
                            <h1 className="">
                                <img src={logo} className="img-fluid w-100"/>
                            </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src="https://ardfacia.sirv.com/img/home.jpg"
                            className="d-block w-100" 
                            alt=""
                        />
                        <Carousel.Caption>
                            <h1 className="">
                                <img src={logo} className="img-fluid w-100"/>
                            </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                
            </Fade> 
            <Container fluid>
            <Fade direction="down"><div id="second" className={RowPage}>
                <div className="col-sm">
                    <h1 className="display-1 animate-character">ALWAYS ON TIME</h1>
                    <q>
                        <i>Time is the most important aspect of any construction
                            project, whether its achieving time targets or the
                            lifetime durability of a structure
                        </i>
                    </q>
                    <br />
                    <strong>Emmanuel T Nemhara</strong>
                </div>
                <div className="col-sm">
                    <img className="img-fluid imgBorder" src="https://ardfacia.sirv.com/img/homeTwoImg.jpg" alt="" />
                </div>
                <div className="text-center">
                    <a href="#third" className="pointer">
                        <img src="https://ardfacia.sirv.com/img/down.png" alt="scroll down" />
                    </a>
                </div>
            </div></Fade>

            <Fade direction="down"> <div id="third" className={RowPage}>
                <div className="col-sm order-md-second">
                    <h1 className="display-1 animate-character">CONCEPTUALIZE DESIGN IMPLEMENT </h1>
                </div>
                <div className="col-sm order-md-first">
                    <img className="img-fluid imgBorder" src="https://ardfacia.sirv.com/img/homeThreeImg.jpg" alt="" />
                </div>
                <div className="text-center">
                    <a href="#fourth" className="pointer">
                        <img src="https://ardfacia.sirv.com/img/down.png" alt="scroll down" />
                    </a>
                </div>
            </div></Fade>

            <Fade direction="down"><div id="fourth" className={RowPage}>
                <div className="col-sm">
                    <h1 className="display-1 animate-character">DRIVEN</h1>
                    <q>
                        <i>
                            It's not the beauty of a building you should look at; it's the constructionof the foundation that will stand the taste of time
                        </i>
                    </q>
                    <br />
                    <b>David Allan Coe</b>
                </div>
                <div className="col-sm ">
                    <img className="img-fluid imgBorder" src="https://ardfacia.sirv.com/img/homeFourImg.jpg" alt="" />
                </div>
            </div>
            </Fade>
            </Container>
        </div>
    );

}

export default Home;

