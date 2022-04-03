import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

export default function Spending() {
    const [spending, setSpending] = useState([]);
    const [addressToOrg, setAddressToOrg] = useState({});

    // Gets list of top donors from API
    useEffect(() => {
        fetch("http://ec2-54-173-89-146.compute-1.amazonaws.com/transactions")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setSpending(result);
                },
                (error) => {
                    console.log(error);
                }
            );
        fetch("http://ec2-54-173-89-146.compute-1.amazonaws.com:80/users")
            .then((res) => res.json())
            .then(
                (users) => {
                    console.log(users);
                    const mapping = {};
                    users.forEach((user) => {
                        mapping[user.ethAddress] = user.userName;
                    });
                    console.log(mapping);
                    setAddressToOrg(mapping);
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
                        <Nav.Link href="dashboard">Top Donors</Nav.Link>
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
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Organization</th>
                            <th>Sent To</th>
                            <th>Amount (ETH)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {spending.map((transaction) => {
                            return (
                                <tr key={transaction.txHash}>
                                    <td>
                                        {addressToOrg[transaction.toEthAddress]}
                                    </td>
                                    <td>
                                        {
                                            addressToOrg[
                                                transaction.fromEthAddress
                                            ]
                                        }
                                    </td>
                                    <td>{transaction.ethDonated}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
