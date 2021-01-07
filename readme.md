### Jur Status Smart Contract Challenge

This repository consist of react application that consumes the jur status contract

- as an owner of the contract, I should be able to create a new Jur Status type
- as an owner of the contract, I should be able to create a new Jur Status
- as an owner of the contract, I should be able to see the list of Jur Statuses

Getting Started

Watch A brief intro  [SHORT DEMO VIDEO](https://www.loom.com/share/d970f55db6cb49b68a2831d02ceb5514)

Run the following

> Truffle is the framework we'll use to help us easily manage and deploy our Solidity codes. 

```
npm i -g truffle

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

### Start The React/Drizzle App

Install Metamask chrome extension

[MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)


Run the Following

```
cd app/

npm run start:dev

```

Open the browser and go to PORT 8080

I always love feedbacks ): do shoot me a mail at khord4eng@gmail.com.

