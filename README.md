# DonationDAO

# Motivation: 

Using crypto to donate to international organizations as seen with Ukraine the past few weeks has become very relevant. 

# Current Problems Include:
    - Making sure the address belongs to an actual foundation
    - Prone to scams
    - Difficult to track the crypto dealings of a non-profit 
    - Donors want to ensure that donations are being spent to actually support the cause
    
    
# Solution

DonationDAO is a platform that provides verified and reliable donations to approved orgnizations. All organizations will be approved by tokenholders of the DD (DonationDAO). DD tokens are given every month to the most consistent donors that use the platform.

Our platform has the following features
- Can transfer funds between a donor and an approved organization
- Offers analytics regarding the top donors on the platform
- Lists the organizations that have been approved by DonationDAO
- DAO contracts for the token and the governance
- Backend to support all data analytics and donors on the platform

Features that are Partly implemented
- A sankey visual to track how each orgnaization is spending their money
- A UI to interact with the Governance contracts


## DonationDAO Video Demo

Link: 

    

## Requirements to Run

-   [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    -   You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
-   [Nodejs & npm](https://nodejs.org/en/)
    -   You'll know you've installed nodejs right if you can run:
        -   `node --version` And get an ouput like: `vx.x.x`
    -   You'll know you've installed npx right if you can run:
        -   `npm --version` And get an ouput like: `x.x.x`
-   [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
    -   You'll know you've installed yarn right if you can run:
        -   `yarn --version` And get an output like: `x.x.x`
        -   You might need to install it with npm
-   [Metamask](https://metamask.io/)
    -   This is a browser extension that lets you interact with the blockchain.

## Steps to Run

1. Clone and enter main directory

```
git clone https://github.com/xaneeshax/neu_lionhack
cd neu_lionhack
```

2. Install all dependencies

```
yarn
cd hardhat-simple-storage
yarn
```

2. Run hardhat local node (make sure you are in the `hardhat-simple-storage` directory)

```
yarn hardhat node
```

This will deploy a sample contract and start a local hardhat blockchain.

3. Connect your [metamask](https://metamask.io/) to your local hardhat blockchain.

In the output of the above command, take one of the private key accounts and [import it into your metamask.](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account)

Next, Add a new Network:
Network Name: hardhat-localhost
New RPC URL: http://127.0.0.1:8545/
Chain ID: 31337
Currency Symbol: ETH

4. Open the UI

Open a new terminal side-by-side making sure you are in the root `neu_lionhack` directory and run:

```
yarn dev
```

5. Hit buttons

After running `yarn dev`, the UI is at http://localhost:3000. Hit the `Connect` button then fill out the fields and hit `Execute` and you'll send a transaction to your localhardhat.

### Important localhost note

If you use metamask with a local network, everytime you shut down your node, you'll need to reset your account. Settings -> Advanced -> Reset account. Don't do this with a metamask you have real funds in.

# Thank you!
