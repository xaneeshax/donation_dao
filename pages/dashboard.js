import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Dashboard() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="orgs">Organizations</Nav.Link>
                        <Nav.Link href="dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="spending">Org Spending</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1>Top Donors</h1>
        </div>
    );
}
