module.exports = {
  ens: {
    enabled: false
  },
  contracts_build_directory: "./app/src/contracts",
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      gas: 6721975,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
