import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Spending() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="orgs">Organizations</Nav.Link>
                        <Nav.Link href="dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="spending">Org Spending</Nav.Link>
                        <Nav.Link href="dao">Donation DAO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1>Organization Spending Analysis</h1>
            <p>
                Using crypto to donate to international organizations as seen
                with Ukraine over the past few weeks has become a great medium
                in order to show support from all across the globe. However, is
                is difficult to track the crypto dealings of a non-profit so we
                are using this analysis tool for people to have a better
                understanding on how their donations are being spent.
            </p>
        </div>
    );
}
