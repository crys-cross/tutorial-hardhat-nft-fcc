const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
const { storeImages } = require("../utils/uploadToPinata")
const imagesLocation = "./images/randomNft"

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    let tokenUris
    let vrfCoordinatorV2Address, subscriptionId

    //get the IPFS hashes ofour images(Methods below)
    //1. With our IPFS node. https://docs.ipfs.io/
    //2. pinata https://www.pinata.cloud/   pinata-node-sdk
    //3. nft.storage(uses filecoin network) https://nft.storage/
    if (process.env.UPLOAD_TO_PINATA == "true") {
        tokenUris = await handleTokenUris()
    }

    if (developmentChains.includes(network.name)) {
        const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        vrfCoordinatorV2Address = vrfCoordinatorV2Mock.address
        const tx = await vrfCoordinatorV2Mock.createSubscription()
        const txReceipt = await tx.wait(1)
        subscriptionId = txReceipt.events[0].args.subId
    } else {
        vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2
        subscriptionId = networkConfig[chainId].subscriptionId
    }
    log("----------------------------")
    await storeImages(imagesLocation)
    // const args = [
    //     vrfCoordinatorV2Address,
    //     subscriptionId,
    //     networkConfig[chainId].gasLane,
    //     networkConfig[chainId].mintFee,
    //     //tokenURI
    //     networkConfig[chainId].callbackGasLimit,
    // ]
}

handleTokenUris = async () => {
    tokenUris = []
    //store the image in IPFS
    //store the metadata in IPFS

    return tokenUris
}

module.exports.tags = ["all", "randomipfs", "main"]
