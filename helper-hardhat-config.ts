const { ethers } = require("hardhat")

export interface networkConfigItem {
    name?: string
    subscriptionId?: string
    keepersUpdateInterval?: string
    raffleEntranceFee?: string
    callbackGasLimit?: string
    vrfCoordinatorV2?: string
    gasLane?: string
    ethUsdPriceFeed?: string
    mintFee?: string
}

export interface networkConfigInfo {
    [key: number]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    // Default one is ETH/USD contract on Kovan
    31337: {
        name: "localhost",
        raffleEntranceFee: ethers.utils.parseEther("0.01").toString(),
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        callbackGasLimit: "500000", // 500,000 gas
        mintFee: "10000000000000000", // 0.01 ETH
        subscriptionId: "6727",
        // interval: "30",
    },
    4: {
        name: "rinkeby",
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
        vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        raffleEntranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        subscriptionId: "6727", //for rinkeby
        callbackGasLimit: "500000" /*500,000*/,
        // interval: "30",
    },
    80001: {
        name: "polygon(mumbai-testnet)",
        ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    },
}

export const developmentChains = ["hardhat", "localhost"]
export const DECIMALS = 18
export const INITIAL_PRICE = ethers.utils.parseUnits("2000", "ether")
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6
