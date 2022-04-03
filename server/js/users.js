const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config()

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  });


/* 
  API Name :      /users
  API Type :      GET
  Descrption :    Get all Users in the database
  Input Payload : NA
*/
module.exports.listAllUsers = async(req, res) => {

    sql_query = `SELECT * from users;`
    console.log(`Query : ${sql_query}`);

    connection.query(sql_query, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is retruned');
      res.send(results);
    });
};

/* 
  API Name :      /users/:id
  API Type :      GET
  Descrption :    Get a specific User
  Input Payload : NA
*/
module.exports.getUserDetails = async(req, res) => {

    const ethAddress = req.params.id;

    sql_query = `SELECT * from users where ethAddress = '${ethAddress}';`
    console.log(`Query : ${sql_query}`);

    connection.query(sql_query, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is retruned');
      res.send(results);
    });
};