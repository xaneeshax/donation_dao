const { application } = require('express');
const { query } = require('express');
const mysql = require('mysql');
const { ORDER } = require('mysql/lib/PoolSelector');
const requests = require('requests');

require('dotenv').config()

var api = require('etherscan-api').init('QN1RAZHI5YK7HCJREAFW12J3HEIN1S5PBI', 'rinkeby');

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});

/* 
  API Name :      /utils/ethPrice
  API Type :      GET
  Descrption :    Get latest Ethereum Price
  Input Payload : NA
*/
module.exports.getEthPrice = async(req, res) => {

    requests('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd').on('data', function (chunk) {
        const currentEthPrice = JSON.parse(chunk).ethereum.usd 
        res.send(JSON.stringify(currentEthPrice));
        console.log(currentEthPrice);
  })
};


module.exports.getEthScanTx = async(req, res) => {
    const txAddress = req.params.id;    
    var balance = api.proxy.eth_getTransactionByHash(txAddress);
    balance.then(function(balanceData){
        const fromTx = balanceData.result.from
        const toTx = balanceData.result.to
        const valueTx = parseInt(balanceData.result.value, 16)/1000000000000000000; 
        console.log(`${fromTx} --- ${toTx} ---- ${valueTx}`);
        res.send(balanceData);
        console.log(balanceData);
    });
};

module.exports.topDonors = async(req, res) => {

  sql_query = `Select fromEthAddress, sum(ethDonated) as total_donations from transactions Group BY fromEthAddress; `
  console.log(`Query : ${sql_query}`);
  connection.query(sql_query, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is retruned');
    res.send(results);
  });
};

module.exports.getOrgDonors = async(req, res) => {

  const orgId = req.params.id;

  sql_query = `Select fromEthAddress, ethDonated from  transactions  where toEthAddress = '${orgId}'; `

  console.log(`Query : ${sql_query}`);
  connection.query(sql_query, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is retruned');
    res.send(results);
  });
};