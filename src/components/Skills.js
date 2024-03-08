import cssl from "../assets/img/cssl.png";
import jsl from "../assets/img/jsl.png";
import asml from "../assets/img/asml.png";
import ejsl from "../assets/img/ejsl.png";
import exjsl from "../assets/img/exjsl.png";
import cppl from "../assets/img/cppl.png";
import githubl from "../assets/img/githubl.png";
import htmll from "../assets/img/htmll.png";
import reactl from "../assets/img/reactl.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
/*import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";*/
import colorSharp from "../assets/img/color-sharp.png"
import {Container, Col, Row } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmll} alt="html" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={cssl} alt="css" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={jsl} alt="js" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={cppl} alt="cpp" />
                                <h5>C++</h5>
                            </div><div className="item">
                                <img src={exjsl} alt="exj" />
                                <h5>Express Js</h5>
                            </div><div className="item">
                                <img src={ejsl} alt="ejs" />
                                <h5>Embedded Js</h5>
                            </div><div className="item">
                                <img src={reactl} alt="react" />
                                <h5>React Js</h5>
                            </div><div className="item">
                                <img src={asml} alt="asm" />
                                <h5>Assembly Language</h5>
                            </div><div className="item">
                                <img src={githubl} alt="github" />
                                <h5>GitHub</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
            </Container>
        <img className="background-image-left" src={colorSharp} alt="aaa" />
    </section>
  )
}