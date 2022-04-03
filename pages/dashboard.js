import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { useEffect } from "react";

export default function Dashboard() {
    const [donors, setDonors] = useState([]);

    // Gets list of top donors from API
    useEffect(() => {
        fetch(
            "http://ec2-54-173-89-146.compute-1.amazonaws.com:80/utils/getTopDonors"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    result.sort(
                        (a, b) => b.total_donations - a.total_donations
                    );
                    setDonors(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);

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
            <h1>Top Donors</h1>
            <ListGroup as="ol" numbered>
                {donors.map((donor) => {
                    return (
                        <ListGroup.Item
                            key={donor.fromEthAddress}
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{donor.userName}</div>
                                {donor.fromEthAddress}
                            </div>
                            <Badge bg="primary" pill>
                                ETH {donor.total_donations}
                            </Badge>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </div>
    );
}
