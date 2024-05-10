const express = require("express");

const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
require("dotenv").config

const db = require("./models")


//ROUTES

const DriversRoutes = require("./Routes/Drivers");
app.use("/Drivers", DriversRoutes);


const CircuitsRoutes = require("./Routes/Circuits");
app.use("/Circuits", CircuitsRoutes);








db.sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 3006, () => {
      console.log(`Server is up and running on Port` );
    });
  })
  .catch(error => {
    console.error('Error occurred during database synchronization:', error);
  });