import { RowPage } from "../Components/Flex";
import firstImg from "../assets/img/homeImg.jpg";
import secondImg from "../assets/img/homeTwoImg.jpg";
import thirdImg from "../assets/img/homeThreeImg.jpg";
import fourthImg from "../assets/img/homeFourImg.jpg";
import logo from "../assets/img/logoTwo.png";
import down from "../assets/img/down.png";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    return (
        <div className="container-fluid mt-5">
            <Fade direction="down"><div className={RowPage}>
                <div className="col-sm order-md-second">
                    <img src={logo} className="img-fluid" />
                </div>
                <div className="col-sm order-md-first">
                    <img src={firstImg} className="img-fluid imgBorder" />
                </div>
                <div className="text-center">
                    <a href="#second">
                        <img src={down} alt="scroll down" />
                    </a>
                </div>
            </div></Fade>

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
            </div></Fade>
            
        </div>
    );

}

export default Home;