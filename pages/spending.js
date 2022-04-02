import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi } from "../constants/abi";
import org from "./orgs.js"
import dashboard from "./dashboard.js"
import spending from "./spending.js"

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
                    </Nav>
                </Container>
            </Navbar>
            <h1>Organization Spending Analysis</h1>
            <p>
                Using crypto to donate to international organizations as seen with Ukraine over the past 
                few weeks has become a great medium in order to show support from all across the globe.
                However, is is difficult to track the crypto dealings of a non-profit so we are using this
                analysis tool for people to have a better understanding on how their donations are being
                spent.
            </p>
        </div>
    )
}