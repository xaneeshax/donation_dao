import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OrgIcon from "./orgIcon";
import app_orgs from "./org_list";

export default function Orgs() {
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
            <h1>Approved Organizations</h1>
            <p>
                Only organizations that are approved by the Donation DAO will be
                listed on the platform. Donation DAO ensures that the provided
                wallet address belongs to legitimate foundations in order to
                better prevent scams and fake charity organizations.
            </p>

            <section className="orglist">
                {app_orgs.map((organization) => {
                    return (
                        <OrgIcon
                            key={organization.id}
                            organization={organization}
                        ></OrgIcon>
                    );
                })}
            </section>
        </div>
    );
}
