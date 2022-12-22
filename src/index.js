const express = require("express");
const {
  // getBaycHolders,
  // getCoolCatHolders,
  getHoldersOfBoth,
  getBalance,
} = require("./controllers/holdersController.js");

//Set the port to 5000 to avoid conflict with 3000 default port
const PORT = 3005;

const app = express();

// Endpoint to return a list of holders of both tokens
app.get("/both-holders", getHoldersOfBoth);

// Endpoint to return the	Balance of an owner who owns both tokens
app.get("/owners-balance", getBalance);

app.listen(PORT, () => console.log("Server is running"));
