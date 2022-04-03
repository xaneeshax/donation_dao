import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Dashboard() {

    // Gets list of top donors from API
    useEffect(() => {
        fetch("http://ec2-54-173-89-146.compute-1.amazonaws.com:80/users")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
                const orgs = result.filter(data => data.userType === "Organization");
                console.log(orgs);
                setOrganizations(orgs);
            },
            (error) => {
                console.log(error);
            }
          )
      }, [])

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
