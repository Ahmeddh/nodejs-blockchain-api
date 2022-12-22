const Web3 = require("web3");

// Set up web3 instance
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/69a978fad6ce45f8b3c0fd577fdd2940"
  )
);

// Function to return a contract instance
const getContractInstance = (abi, address) => {
  return new web3.eth.Contract(abi, address);
};

//Function to return wallet balance
const getBalance = async (address) => {
  const balance = await web3.eth.getBalance(address);
  return Web3.utils.fromWei(balance, "ether");
};
module.exports = {
  getContractInstance,
  getBalance,
};
