import "bootstrap/dist/css/bootstrap.min.css";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Syntax to use Web3 Modal library
let web3Modal;

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            rpc: { 42: process.env.NEXT_PUBLIC_RPC_URL }, // required
        },
    },
};

if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions, // required
    });
}

export default function Home() {
    // state to represent whether a wallet is connected to the site
    const [isConnected, setIsConnected] = useState(false);
    // state to represent whether a user has a Metamask wallet
    const [hasMetamask, setHasMetamask] = useState(false);
    // represents whether the store number function was executed
    const [executed, setExecuted] = useState(false);
    // Sets the account that is connected to the site
    const [signer, setSigner] = useState(undefined);
    // Stores the value that the user inputs
    const [storedVal, setStoredVal] = useState(0);
    // Stores the web3 provider
    const [provider, setProvider] = useState(undefined);
    // Stores the Organizations from the API call
    const [organizations, setOrganizations] = useState([]);
    // Stores the organization that will receive funds
    const [targetOrg, setTargetOrg] = useState(undefined);

    // uses the window vars to see if Metamack has been installed
    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true);
        }
    }, [setHasMetamask]);

    // Gets organizations from API
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

    // Connects the wallet to the site using web3Modal
    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                const web3ModalProvider = await web3Modal.connect();
                setIsConnected(true);
                const newProvider = new ethers.providers.Web3Provider(
                    web3ModalProvider
                );
                setProvider(newProvider);
                setSigner(newProvider.getSigner());
                console.log(newProvider.getSigner());
            } catch (e) {
                console.log(e);
            }
        } else {
            setIsConnected(false);
        }
    }

    // Transfers the given amount of Ether to the selected organization
    async function execute() {
        if (typeof window.ethereum !== "undefined") {
            const signerAddress = signer.getAddress();

            const transaction = {
                from: signerAddress,
                to: targetOrg,
                value: ethers.utils.parseEther(storedVal),
                nonce: provider.getTransactionCount(signerAddress, "latest"),
                gasLimit: ethers.utils.hexlify(3000000),
                gasPrice: provider.getGasPrice(),
            };

            signer
                .sendTransaction(transaction)
                .then((transaction) => {
                    console.log(transaction);
                    alert("Send finished!");
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("Please install MetaMask");
        }
    }

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
            {hasMetamask ? (
                <Container>
                    {isConnected ? (
                        <p>Connected!</p>
                    ) : (
                        <Button onClick={() => connect()}>Connect</Button>
                    )}
                </Container>
            ) : (
                "Please install metamask"
            )}
            {isConnected ? (
                <Container>
                    <Form>
                        <Form.Select aria-label="Organization Selector" onChange={(e) => setTargetOrg(e.target.value)}>
                            <option>
                                Which organization would you like to donate to?
                            </option>
                            {organizations.map(org => <option key={org.ethAddress} value={org.ethAddress}>{org.userName}</option>)}
                        </Form.Select>
                        <Form.Group
                            className="mb-3"
                            controlId="ETH-donation-amount"
                        >
                            <Form.Label>
                                How much ETH would you like to donate?
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ETH amount"
                                onChange={(e) => setStoredVal(e.target.value)}
                            />
                        </Form.Group>
                        <Button onClick={() => execute()}>Execute</Button>
                        {executed ? (
                            <Button onClick={() => showStored()}>
                                My Value
                            </Button>
                        ) : (
                            <></>
                        )}
                    </Form>
                </Container>
            ) : (
                <></>
            )}
        </div>
    );
}
