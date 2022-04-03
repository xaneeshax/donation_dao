import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ListGroup } from "react-bootstrap";
import { Badge } from "react-bootstrap";

export default function Dao() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="orgs">Organizations</Nav.Link>
            <Nav.Link href="dashboard">Top Donors</Nav.Link>
            <Nav.Link href="spending">Org Spending</Nav.Link>
            <Nav.Link href="dao">Donation DAO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>Join the Donation DAO!</h1>
      <p>
        The Donation DAO allows community members to vote on protocols and
        establish credible charity organizations for the platform.
      </p>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">PETA</div>
            Add as credible organization
          </div>
          <Badge bg="primary" pill>
            Votes: 4529
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">American Lung Association</div>
            Add as credible organization
          </div>
          <Badge bg="primary" pill>
            Votes: 2406
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">ACLU</div>
            Add as credible organization
          </div>
          <Badge bg="primary" pill>
            Votes: 5688
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
