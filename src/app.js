const express = require('express');

const app = express()
const port = 5001
const db = require("../models");
const { produits_mock } = require('./data/data');
var cors = require('cors')
app.use(cors())
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for JSON data
app.use(bodyParser.urlencoded({ extended: true })); // for URL-encoded data
var multer = require("multer");
var upload = multer();
app.use(upload.any());

db.sequelize.sync({ force: false }).then(function () {
  app.listen(port, function () {
    console.log("server is successfully running!");
  });
});



app.get('/devis', async (req, res) => {
  const devisList = await db.produits.findAll();
  res.send(devisList)
})

app.post('/addDevis', function (req, res, next) {
  console.log(`\nform-data ->> ${JSON.stringify(req.body)}`);
  console.log(req.files)
 db.produits.create({...req.body,[req.files[0].fieldname]:new Blob(req.files[0].buffer),[req.files[1].fieldname]:new Blob(req.files[1].buffer)})
  res.status(200);
});
