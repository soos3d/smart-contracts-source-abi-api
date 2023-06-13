# Get smart contract source code and ABI

This project uses the Etherscan API to retrieve the name, source code, and ABI from a smart contract address. Note that the smart contract must be verified.

## Quickstart

* Clone the repo
* Install dependencies

```sh
npm install
```

* Add Etherscan API key to `.env.sample` and rename to `.env`
* Run the server

```sh
node index
```

Now you can send a post request to this server:

```sh
curl --location 'http://localhost:3333/contractData' \
--header 'Content-Type: application/json' \
--data '{"address":"0x7f268357A8c2552623316e2562D90e642bB538E5"}'
```
 
