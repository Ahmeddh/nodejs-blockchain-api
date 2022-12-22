const Web3 = require("web3");

// Function to return a contract instance
const getContractInstance = (abi, address) => {
  // Set up web3 instance
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      "https://mainnet.infura.io/v3/69a978fad6ce45f8b3c0fd577fdd2940"
    )
  );

  return new web3.eth.Contract(abi, address);
};

module.exports = {
  getContractInstance,
};
