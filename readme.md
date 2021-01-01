### Jur Status Smart Contract Challenge

This repository consist of react application that consumes the jur status contract

- as an owner of the contract, I should be able to create a new Jur Status type
- as an owner of the contract, I should be able to create a new Jur Status
- as an owner of the contract, I should be able to see the list of Jur Statuses

Getting Started

Run the following

> Truffle is the framework we'll use to help us easily manage and deploy our Solidity codes. 

```
truffle develop

```

Compile the contracts and ensure build artificats are the react app directory

*Note I Upated the truflle config file to enable this*

```
truffle compile

truffle migrate --network development

```

After deploying to our local blockchain then we run our smart contract test

```
truffle test

```

