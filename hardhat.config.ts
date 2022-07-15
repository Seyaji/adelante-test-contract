import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      // @ts-ignore
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;
