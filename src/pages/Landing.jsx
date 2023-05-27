import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Landing() {
  const communityType = [
    {
      title: "General Platform",
      link: "",
    },
    {
      title: "Personal Blog",
      link: "",
    },
    {
      title: "Multi Author Feed",
      link: "",
    },
    {
      title: "Multi Tag/ Multi Author/ Multi Community",
      link: "",
    },
  ];

  const pageCards = [
    {
      title: "Points system and token claim drop",
      link: "",
    },
    {
      title: "Info about self hosting or hosting with us",
      link: "",
    },
    {
      title: "Volunteer node operations",
      link: "",
    },
  ];

  return (
    <Container>
      <h1>Breakaway Communities</h1>
      <br />
      <Row xs={4} md={4} className="g-4">
        {communityType.map((_, idx) => (
          <Col id={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{_.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      {pageCards.map((_, idx) => (
        <>
          <Row>
            <Card>
              <Card.Body>
                <Card.Title>{_.title}</Card.Title>
              </Card.Body>
            </Card>
          </Row>
          <br />
        </>
      ))}
    </Container>
  );
}

export default Landing;
