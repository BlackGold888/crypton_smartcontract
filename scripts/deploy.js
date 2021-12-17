const {ethers} = require("hardhat");

async function main() {
    // We get the contract to deploy
    const Donate = await ethers.getContractFactory("Donate");
    const donate = await Donate.deploy();
    console.log("Donate deployed to:", donate.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
