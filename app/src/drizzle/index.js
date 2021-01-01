// Import contracts
import JurStatus from "../contracts/JurStatus.json"

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  contracts: [JurStatus],
  events: {
    JurStatus: ["StateChanged", "StatusAdded"],
  },
  polls: {
    //accounts: 1500
  },
}

export default drizzleOptions
