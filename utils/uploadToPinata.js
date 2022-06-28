const pinataSDK = require("@pinata/sdk")
const path = require("path")
const fs = require("fs")

// ./images/randomNft/
storeImages = async (imagesFilePath) => {
    const fullImagesPath = path.resolve(imagesFilePath)
    const files = fs.readdirSync(fullImagesPath)
    console.log(files)
}
module.exports = { storeImages }
