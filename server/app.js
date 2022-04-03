const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userController = require('./js/users');
const txController = require('./js/transactions');
const utilController = require('./js/utils');


const app = express();

app.set('host', '127.0.0.1');
app.set('port', 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/listAll', nftController.listAll);
// app.get('/getOwnerNFTs', nftController.getOwnerNFTs);
// app.post('/createOwnerNFT', nftController.createOwnerNFT); 
// app.get('/getResearcherNFTs', nftController.getResearcherNFTs); 
// app.get('/createUniqueCollection', uniqueController.createUniqueCollection); 

app.get('/users', userController.listAllUsers);
app.get('/users/:id', userController.getUserDetails);


app.get('/transactions', txController.listAllTxs);
app.post('/transactions', txController.createTx);
app.get('/transactions/:id', txController.getTxDetails);

app.get('/utils/ethPrice', utilController.getEthPrice);
app.get('/utils/ethScanTx/:id', utilController.getEthScanTx);
app.get('/utils/getTopDonors', utilController.topDonors);
app.get('/utils/orgs/:id', utilController.getOrgDonors);



app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });

module.exports = app;
