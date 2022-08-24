import { RowPage } from "../Components/Flex";
import firstImg from "../assets/img/homeImg.jpg";
import secondImg from "../assets/img/homeTwoImg.jpg";
import logo from "../assets/img/logoTwo.png";
import down from "../assets/img/down.png";

const Home=()=>{
    return(
        <div className="container-fluid">
            <br/>
            <br/>
            <div className={RowPage}>
                <div className="col-sm order-md-second">
                    <img src={logo} className="img-fluid"/>
                </div>
                <div className="col-sm order-md-first">
                    <img src={firstImg} className="img-fluid imgBorder"/>
                </div>
                <div className="text-center">
                <a href="#next">
                    <img src={down}  alt="scroll down"/>
                </a>
            </div>
            </div>
            
            <div id="next" className={RowPage}>
                <div className="col-sm">
                    <h1 className="display-1 animate-character">ALWAYS ON TIME</h1>
                    <q>
                        <i>Time is the most important aspect of any construction
                            project, whether its achieving time targets or the
                            lifetime durability of a structure
                        </i>    
                    </q>
                    <br/>
                    <strong>Emmanuel T Nemhara</strong>
                </div>
                <div className="col-sm">
                    <img className="img-fluid imgBorder" src={secondImg} alt=""/>
                </div>
                <div className="text-center">
                <a href="#next" className="pointer">
                    <img src={down}  alt="scroll down"/>
                </a>
            </div>
            </div>
        </div>
    );

}

export default Home;