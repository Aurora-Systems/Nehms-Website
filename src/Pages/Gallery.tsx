import { Container } from "react-bootstrap";
import {Fade} from "react-awesome-reveal"


const Gallery = () => {
    return (
        <div className="text-center container">
            <Fade direction="down" cascade={true}>
                <div className="text-center">
                    <h1 className="display-1 animate-character m-5">Gallery</h1>
                </div>
                <div className="text-center embed-responsive embed-responsive-16by9 page">
                    <iframe className="embed-responsive-item w-100 h-100  imgBorder" src="https://www.youtube.com/embed/4SKUHTHcNZk" title="Boundary wall and Paving"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>
                <Container>
                    <div className="powr-instagram-feed" id="9b6ce8fe_1661779010"></div>
                </Container>
            </Fade>
        </div>
    )
}

export default Gallery;