import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function HeroSection() {
  return (
    <Container fluid>
      <Row className="hero__banner">
        <Image
          fluid
          src="https://i.ibb.co/vvMgTqB/banner-image2.jpg"
          alt="hero banner"
          class="hero__image"
          style={{
            opacity: "90%",
            objectFit: "fill",
            backgroundPosition: "center",
            padding: "0",
            height: "250px",
          }}
        />
      </Row>
    </Container>
  );
}

export default HeroSection;
