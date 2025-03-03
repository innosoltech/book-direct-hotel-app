import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Book Direct &copy; {currentYear}</p>
            <p style={{ color: "", fontSize: "small" }}>Innosol Technologies</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
