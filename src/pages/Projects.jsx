import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import dashboard from "../assets/projects/dashboard.png";
import eskaji from "../assets/projects/eskaji.png";
import spotify from "../assets/projects/spotify.png";
import kaaesh from "../assets/projects/kaaesh.png";
import kvrtour from "../assets/projects/kvrtours.png";
import dostairlines from "../assets/projects/dostairline.png";
import insta from "../assets/projects/insta.png";
import project from "../assets/projects/project.jpeg";
import carbike from "../assets/projects/Carbikerentals.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaaesh}
              isBlog={false}
              title="KaaEsh"
              description="The user interface for the restaurant is designed to provide a seamless and intuitive navigation experience. It allows users to effortlessly explore menu items, make reservations, and place orders with ease. The website is fully responsive, adapting smoothly to different devices and screen sizes, ensuring a consistent and user-friendly experience across desktops, tablets, and smartphones. This responsiveness enhances accessibility for all users, regardless of the device they use. The design prioritizes simplicity and efficiency, allowing users to quickly find the information they need. Additionally, clear visuals and streamlined functionality contribute to an overall satisfying user interaction."
              ghLink="https://github.com/Karmveersingh2003/KaaEsh"
              demoLink="https://kaaesh.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carbike}
              isBlog={false}
              title="Car Bike Rentals"
              description="I developed a full stack web application that enables users to search for and rent cars and bikes. The platform features a user-friendly interface that allows seamless browsing of available vehicles. I implemented user authentication to ensure secure access, allowing users to create accounts, log in, and manage their bookings. The website is fully responsive, ensuring an optimal viewing experience across various screen sizes, from desktops to mobile devices. The back-end efficiently handles data management and ensures smooth performance throughout the user journey."
              ghLink="https://github.com/Karmveersingh2003/updated-car-bike"
              demoLink="https://car-bike-rentalsup-karamveers-projects-96ea961d.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kvrtour}
              isBlog={false}
              title="KVR TOURS"
              description="This project involves creating a user-friendly web application prototype designed to simplify the process of planning and navigating holiday tours. The application ensures smooth and intuitive user interactions, making it easy to explore and organize tours. A key feature of this platform is its responsive design, allowing it to function seamlessly across various devices, including smartphones, tablets, and desktops. This ensures an optimal user experience by adapting to different screen sizes while maintaining accessibility for all users. The goal is to deliver a highly engaging and efficient interface that caters to the needs of travelers."
              ghLink="https://github.com/Karmveersingh2003/kvrtour"
              demoLink="https://kvrtours.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eskaji}
              isBlog={false}
              title="EsKaJi Sweets"
              description="The web application provides admin users with an intuitive interface to manage product inventory efficiently. Admins can easily add, delete, update, and fetch product details, streamlining inventory management tasks. I integrated responsive design principles, utilizing CSS media queries and flexible layouts to enhance the user experience across various devices. The design ensures that the website adapts seamlessly to different screen sizes, offering optimal usability whether accessed from desktops, tablets, or mobile phones. This approach guarantees a consistent and user-friendly interface for all users."
              ghLink="https://github.com/Karmveersingh2003/EsKaJi-sweets"
              demoLink="https://eskaji-sweets.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Project"
              description="The web application enables users to effortlessly listen to music and retrieve songs through an API. I developed a responsive design using CSS media queries and flexible layouts, ensuring that the website delivers an optimal experience across various devices. Whether users access the application on desktops, tablets, or mobile devices, the design adapts seamlessly to provide a consistent, user-friendly interface. This approach enhances usability and improves the overall user experience by maintaining functionality and aesthetics across different screen sizes."
              ghLink="https://github.com/Karmveersingh2003/CSI_Assignment_5_SpotifyClone"
              demoLink="https://spotify-by-karam.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Ecommerce"
              description="Developed a full-stack web application using the MERN stack (MongoDB, Express, React, Node.js) that enables administrators to efficiently manage various operations such as adding, updating, deleting, and fetching records. The admin panel provides a user-friendly interface for handling data and ensures smooth CRUD operations. Utilized responsive design principles with CSS media queries and flexible layouts to guarantee a seamless user experience across multiple devices, including desktops, tablets, and smartphones. Ensured the application was optimized for performance and scalability, providing a consistent, fast, and reliable experience for users."
              ghLink="https://github.com/Karmveersingh2003/Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dostairlines}
              isBlog={false}
              title="Dost Airlines"
              description="Developed the flight booking web application’s frontend using React.js.Applied responsive design principles for seamless user experiences across devices.Utilized CSS media queries and flexible layouts to optimize the interface for desktops, tablets, and mobile screens.Ensured consistent, adaptive design that enhances accessibility on various screen sizes.Prioritized usability and intuitive navigation in the user interface.Improved mobile responsiveness to provide a fluid and smooth user experience.Maintained code quality through reusable components and best practices."
              ghLink="https://github.com/Karmveersingh2003/Dost-airlines"
              demoLink="https://dost-airlines.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Admin Dashboard"
              description="In developing the admin dashboard frontend for the web application, I utilized React.js to create an interactive and dynamic user interface. I integrated various graphs and charts to present data visually, facilitating easy understanding for users. To ensure the application is accessible across different devices, I implemented responsive design principles. This involved using CSS media queries and flexible layouts to optimize viewing experiences. As a result, users can access the dashboard seamlessly on desktops, tablets, and mobile devices. This attention to detail enhances usability and provides a consistent experience regardless of the device being used."
              ghLink="https://github.com/Karmveersingh2003/CSI_Assignment3_Admin-Dashboard"
              demoLink="https://admin-dashboard-five-mauve.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insta}
              isBlog={false}
              title="Karam Instagram"
              description="Using technologies like HTML and CSS, I developed the frontend for an Instagram-like application. I implemented responsive design principles, utilizing CSS media queries to adapt the layout based on different screen sizes. This ensured optimal viewing experiences for users on desktops, tablets, and mobile devices. By incorporating flexible layouts, I enhanced the user interface, making it visually appealing and user-friendly. The focus on responsiveness allowed for seamless navigation across various devices, contributing to a more engaging user experience overall."
              ghLink="https://github.com/Karmveersingh2003/karamveer-instagram"
              demoLink="https://instagram-clone-karm.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects