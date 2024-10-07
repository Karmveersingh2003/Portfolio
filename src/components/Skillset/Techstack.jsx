import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiMaterialui,
  SiMongodb,
  SiHtml5
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";


const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>

      <Col xs={2} md={2} className="tech-icons">
        <IoLogoCss3 />
      </Col>

      <Col xs={2} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
           
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineConsoleSql />
      </Col>
      
      <Col xs={2} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>
     

      
      
    </Row>
  );
}

export default Techstack;
