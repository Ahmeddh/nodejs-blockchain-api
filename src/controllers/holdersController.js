// import axios from "axios";
// import Web3 from "web3";
const { getContractInstance, getBalance } = require("../models/web3.js");
// Import ABI for BAYC contract
const BAYC_ABI = require("../constants/BAYC_ABI.json");
const COOL_CAT_ABI = require("../constants/COOL_CAT_ABI.json");

// Import ABI for COOL contract
// import COOL_CAT_ABI from "./constants/COOL_CAT_ABI.json" assert { type: "json" };

//Get All BAYC Holders
const getBaycHolders = async () => {
  // Set up BAYC contract instance
  const BAYC_ADDRESS = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
  const BAYC_contract = getContractInstance(BAYC_ABI, BAYC_ADDRESS);
  // Initialize an empty array to store the holders
  let BAYC_holders = [];
  try {
    // Loop through all possible token IDs
    for (let i = 0; i < 5000; i++) {
      // Check the owner of the current token ID
      const owner = await BAYC_contract.methods.ownerOf(i).call();
      // console.log(owner);

      // If the owner is not the zero address, add it to the array of holders
      if (owner !== "0x0000000000000000000000000000000000000000") {
        BAYC_holders.push(owner);
        // console.log(owner);
      }
    }
    return BAYC_holders;
  } catch (error) {
    console.log(error);
  }
};

//Get All Cool Cats Holders
const getCoolCatHolders = async () => {
  // Initialize an empty array to store the holders
  let cool_cat_holders = [];
  // Set up COOL CAT contract instance
  const COOL_CAT_ADDRESS = "0x1A92f7381B9F03921564a437210bB9396471050C";
  const COOL_CAT_contract = getContractInstance(COOL_CAT_ABI, COOL_CAT_ADDRESS);

  try {
    // Loop through all possible token IDs
    for (let i = 0; i < 500; i++) {
      // Check the owner of the current token ID
      const owner = await COOL_CAT_contract.methods.ownerOf(i).call();

      // If the owner is not the zero address, add it to the array of holders
      if (owner !== "0x0000000000000000000000000000000000000000") {
        cool_cat_holders.push(owner);
      }
    }
    return cool_cat_holders;
  } catch (error) {
    console.log(error);
  }
};

const getHoldersOfBoth = async (req, res) => {
  try {
    // Get the arrays of BAYC and Cool Cats holders
    const BAYCHolders = await getBaycHolders();
    const coolCatsHolders = await getCoolCatHolders();

    // Use the intersection of the two arrays to get holders who have both NFTs
    const bothHolders = BAYCHolders.filter((holder) =>
      coolCatsHolders.includes(holder)
    );

    res.json({
      status: "ok",
      data: bothHolders,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

const ownerOfBoth = [
  "0x7811c6a535DDff8F86BFDEaDE882E744bc9FE380",
  "0x296df88601c8F49535F881DE73684d5e2d530a71",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0xaf469C4a0914938e6149CF621c54FB4b1EC0c202",
  "0x7811c6a535DDff8F86BFDEaDE882E744bc9FE380",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x7FEe302A14D6B945c0EB6dA9C4426c8D75d38a73",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0xCdC116B3749f0E272D337C6213D8EBFFe65D6E1E",
  "0x01F9Ecead3A16C29b2F277e1cE018Cf3985b2597",
  "0x7811c6a535DDff8F86BFDEaDE882E744bc9FE380",
  "0x86F93000A5C817A4B8d04e54AF0D94c0656645a1",
  "0xe1a5288a4752778BE59d23F7e791b8866f6BAF38",
  "0xBA84b70913f28FeE18E2333E36F965074ffBc78f",
  "0x547f6F66738AFe6Dd4117d67452D7D4772315d79",
  "0x7811c6a535DDff8F86BFDEaDE882E744bc9FE380",
  "0xC57fA6d81DE5A179F0FDBf2AFCE3Da54DfF696e4",
  "0x7fC6463386276461cb83605b2c115421C80A6651",
  "0xE55a8A47E4fa55557A0CC2f535595BA4e5aEdD27",
  "0x3432B45B9ee95BD5C31a726B936CF2ec719A2153",
  "0x1254958BD5073C6B238E516298f0c48f6f60A78e",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x7811c6a535DDff8F86BFDEaDE882E744bc9FE380",
  "0x1179002eD66a4cC34695e6d4C509F2E433EE1401",
  "0x9Ff5b690CE21EDcae135648f7ADB26c20f730761",
  "0x50F2242CDa7DF1cc0430C6f50eE8e8D71c3c3614",
  "0x586DcC88a7DAA6655001f8e0A30FA4c4EA06abc5",
  "0xde03B85f9b205A83A3741196BFbafa02EB6bB797",
  "0xE55a8A47E4fa55557A0CC2f535595BA4e5aEdD27",
  "0x0Fd3e2c50EE69fd59E3Ad545Fc07587ADB6fB39E",
  "0xBA84b70913f28FeE18E2333E36F965074ffBc78f",
  "0x7fC6463386276461cb83605b2c115421C80A6651",
  "0x94de7E2c73529EbF3206Aa3459e699fbCdfCD49b",
  "0x54BE3a794282C030b15E43aE2bB182E14c409C5e",
  "0x36B198016ca27ef82b65dFB86473547324E8200f",
  "0x824B25B219b5De8dC30895D48a71534504a7F95C",
  "0xd249554F9D3eDA730DD3a087B1922603E1D3FF48",
  "0x7811c6a535DDff8F86BFDEaDE882E744bc9FE380",
  "0xeD47015Bb8080B9399f9D0ddFc427B9Cee2CaAB1",
  "0x7FEe302A14D6B945c0EB6dA9C4426c8D75d38a73",
  "0x54fA1B6f88B289e58D32e1f0A03570d08F26B31a",
  "0x9Ff5b690CE21EDcae135648f7ADB26c20f730761",
  "0xb22a24Af1352308A9c4220A39948F7c7B116957f",
  "0xA17De16bFD4586DA3c82b5C902530993722aC49B",
  "0x3C050243E71DB15ed07e05784eb9c9B74f7a3b71",
  "0xeD47015Bb8080B9399f9D0ddFc427B9Cee2CaAB1",
  "0x9Ff5b690CE21EDcae135648f7ADB26c20f730761",
  "0x42dB1cCBa62B6aFdFc9F7471b90d7dE2156ebd9C",
  "0x30d58a2e004170f839295c3f37D7E7dfd0ef2310",
  "0x531C3A623480743C5327cC14C9Bc5937B6555E76",
  "0x7FEe302A14D6B945c0EB6dA9C4426c8D75d38a73",
  "0x296df88601c8F49535F881DE73684d5e2d530a71",
];

const getOwnersBalance = async (req, res) => {
  //Balance of an owner who owns both tokens.
  try {
    //Get the first owner balance
    balance = await getBalance(ownerOfBoth[0]);

    res.json({
      status: "ok",
      data: balance,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  getOwnersBalance,
  getHoldersOfBoth,
  getBalance,
};
