const { query } = require('express');
const mysql = require('mysql');
// const dotenv = require('dotenv');
require('dotenv').config()

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  });

/* 
  API Name :      /transactions
  API Type :      GET
  Descrption :    Get all transactions in the database
  Input Payload : NA
*/
module.exports.listAllTxs = async(req, res) => {

    sql_query = `SELECT * from transactions;`
    console.log(`Query : ${sql_query}`);

    connection.query(sql_query, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is retruned');
      res.send(results);
    });
};

/* 
  API Name :      /transactions/:id
  API Type :      GET
  Descrption :    Get a specific transaction from the database
  Input Payload : NA
*/
module.exports.getTxDetails = async(req, res) => {

    const txAddress = req.params.id;

    sql_query = `SELECT * from transactions where txHash = '${txAddress}';`
    console.log(`Query : ${sql_query}`);

    connection.query(sql_query, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is retruned');
      res.send(results);
    });
};

module.exports.createTx = async(req, res) => {

    const from = req.body.fromEthAddress;
    const to = req.body.toEthAddress;
    const txAddress = req.body.txHash;
    const amount = req.body.ethDonated;

    sql_query = `INSERT INTO transactions (fromEthAddress, toEthAddress, txHash, ethDonated) values ('${from}','${to}','${txAddress}',${amount});`
    console.log(`Query : ${sql_query}`);

    connection.query(sql_query, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is retruned');
      res.send(results);
    });
};