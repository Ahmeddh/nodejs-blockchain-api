# nodejs-blockchain-api

This is an example of a simple API service to return some information from Ethereum blockchain.

Requirements
Considering there are 2 NFT tokens, Bored Ape Yacht Club (BAYC) and Cool Cats (COOL).
The service should contain 2 endpoints

1. Return a list of Ethereum accounts which owns both tokens.
   Example Response:
   {
   status: “ok”,
   data: [
   …,
   [address],
   ‘’’
   ]
   }
2. Balance of an owner who owns both tokens.
   Example Response:
   {
   status: “ok”,
   balance: [balance],
   }

Some information you may need
BAYC Address: 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
COOL Address: 0x1A92f7381B9F03921564a437210bB9396471050C
Infura Project: [INFURA_HTTP_ENDPOINT]
