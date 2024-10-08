import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi"
import {
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";



const About = () => {
    return (
      <>
      <div id="homelinkicon">
        <a href="/skillset"><div> <GiSkills/> {" "}Skillset</div></a>
        <a href="/project">  <div> <AiOutlineFundProjectionScreen/>{" "} Projects</div></a>
        <a href="/resume"> <div><CgFileDocument/> {" "}Resume</div></a>
      </div>
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Karamveer Singh </span>
                 and I'm from <span className="yellow"> Jodhpur, Rajasthan.</span>
                <br />
                <br />
                I am currently pursuing Bachelor's degree in Computer Science with specialization in Data Science.
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Node.js, MongoDB, Express.js</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products .</b>
                    
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>

            <Col md={12} className="home-about-social">
                <h1>Working Experience</h1>
              </Col>
            <div class="experience" id="experience">
            <div class="container">
              
                <div class="timeline">
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">August 2024 - October 2024</div>
                            <h2>Microsense Networks</h2>
                            <h4>Jaisalmer, Rajasthan</h4>
                            <p>
                            •Handling daily IT tasks such as supporting users with applications, attending to guest calls, backup management,
network issues, log maintenance, OS updates, etc.<br/>
• Having brief knowledge about applications like Shawman, POS Ultra, Opera, Vingcard Lock System, WSUS, Atempo
backup solution and devices like Routers, Switches, Access Points, KOT and bill printers.

                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">June 2024 - August 2024
                            </div>
                            <h2>Aarvy Technologies</h2>
                            <h4>Gurugram, Haryana</h4>
                            <p>
                            • Developed and maintained user interface of website using technologies like ReactJs.<br/>
                            • Used databases like MongoDB and created RESTful APIs in the project named CarAndBike Rentals.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">June 2024 - August 2024</div>
                            <h2>Celebal Technologies</h2>
                            <h4>Jaipur,Rajasthan</h4>
                            <p>
                            Successfully completed Internship in React JS from Celebal Technologies Pvt. Ltd. situated at Jaipur, Rajasthan
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div class="timeline-text">
                        <div class="timeline-date">April 2024 - June 2024</div>
                            <h2>Microsense Networks</h2>
                            <h4>Jodhpur, Rajasthan</h4>
                            <p>
                            • Handling daily IT tasks such as supporting users with applications, attending to guest calls, backup management,
network issues, log maintenance, OS updates, etc.<br/>
• Having brief knowledge about applications like Shawman, POS Ultra, Opera, Vingcard Lock System, WSUS, Atempo
backup solution and devices like Routers, Switches, Access Points, KOT and bill printers.

                            </p>
                            
                        </div>
                    </div>
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div class="timeline-text">
                        <div class="timeline-date">May 2023 - July 2023</div>
                            <h2>SSDN Technologies</h2>
                            <h4>Gurugram, Haryana</h4>
                            <p>
                            Successfully completed Training in MernStack from SSDN Technologies Pvt. Ltd. situated at Gurgaon, Haryana
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Karmveersingh2003"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/karamveer-singh-222ba5250/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/_karmveersing/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
</>
      );
    
}

export default About