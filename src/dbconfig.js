const mysql = require('mysql');
const { Sequelize } = require('sequelize')


const user = 'root'
const host = 'localhost'
const database = 'DB_IARD'
const password = 'Mourad@123'
const port = '3306'


 const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'mysql',
    logging: false
  })

module.exports = {sequelize}