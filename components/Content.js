import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardComponent from "./CardComponent";

function Content(props) {
  return (
    <Container
      fluid
      style={{
        maxWidth: "60rem",
        display: "flex",
      }}
    >
      <Row className="justify-content-center mt-4 mb-5">
        <h1 className="text-center fs-2 pb-3">Current Status</h1>
        <CardComponent title="Git Operations" status="Normal" />
        <CardComponent title="API Requests" status="Normal" />
        <CardComponent title="Webhooks" status="Normal" />
        <CardComponent title="Issues " status="Normal" />
        <CardComponent title="Pull Requests" status="Normal" />
        <CardComponent title="Actions" status="Normal" />
        <CardComponent title="Packages" status="Normal" />
        <CardComponent title="Pages" status="Normal" />
        <CardComponent title="Codespaces" status="Normal" />
        <CardComponent title="Copilot" status="Normal" />
      </Row>
    </Container>
  );
}

export default Content;
