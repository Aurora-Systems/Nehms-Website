import { RowPage } from "../Components/Flex";
import { useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import firstImg from "../assets/img/homeImg.jpg";
import secondImg from "../assets/img/homeTwoImg.jpg";
import thirdImg from "../assets/img/homeThreeImg.jpg";
import fourthImg from "../assets/img/homeFourImg.jpg";
import logo from "../assets/img/logoTwo.png";
import home from "../assets/img/home.jpg";
import down from "../assets/img/down.png";
import { Fade } from "react-awesome-reveal";
import { divBg } from "../Components/BackgroundStyle";

const Home = () => {
    const [slide,setSlide] = useState<string>(home);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slider =[home,firstImg,secondImg,thirdImg]
    const slideImg=()=>{
        if(currentSlide == 0 || currentSlide < 5){
            console.log(currentSlide+1)
            setCurrentSlide(currentSlide+1)
        }else if(currentSlide == 5){
            setCurrentSlide(0)
        }
    }

//    setInterval(slideImg, 5000)
    
    return (
        <div className=" m-0" >
            <Fade direction="down">
                
                <div className="page d-flex flex-column align-items-center justify-content-center" style={divBg(slider[currentSlide])}>
                <div className="text-center">
                    <img src={logo}  className="img-fluid w-50" />
                </div>
                <div className="text-center">
                    <a href="#second">
                        <img src={down} alt="scroll down" />
                    </a>
                </div>
            </div>
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
                    <img className="img-fluid imgBorder" src={secondImg} alt="" />
                </div>
                <div className="text-center">
                    <a href="#third" className="pointer">
                        <img src={down} alt="scroll down" />
                    </a>
                </div>
            </div></Fade>

            <Fade direction="down"> <div id="third" className={RowPage}>
                <div className="col-sm order-md-second">
                    <h1 className="display-1 animate-character">CONCEPTUALIZE DESIGN IMPLEMENT </h1>
                </div>
                <div className="col-sm order-md-first">
                    <img className="img-fluid imgBorder" src={thirdImg} alt="" />
                </div>
                <div className="text-center">
                    <a href="#fourth" className="pointer">
                        <img src={down} alt="scroll down" />
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
                    <img className="img-fluid imgBorder" src={fourthImg} alt="" />
                </div>
            </div>
            </Fade>
            </Container>
        </div>
    );

}

export default Home;