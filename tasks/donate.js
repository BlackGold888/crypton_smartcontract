require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");

task("balance", "Prints an account's balance")
    .setAction(async (taskArgs) => {
        const DonateContract = await ethers.getContractFactory('Donate');
        const donateContract = await DonateContract.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3');
        const balance = await donateContract.getBalance();
        console.log(balance.toString() + "ETH");
    });

task("donators", "Donate eth")
    .addParam("address", "Donate values")
    .setAction(async (taskArgs) => {
            const DonateContract = await ethers.getContractFactory('Donate');
            const donateContract = await DonateContract.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3');
            const result = await donateContract.getDonators({key: taskArgs.address});

            console.log(result.hash);
    });

task("donate", "Donate eth")
    .addParam("amount", "Donate values")
    .setAction(async (taskArgs) => {
        const DonateContract = await ethers.getContractFactory('Donate');
        const donateContract = await DonateContract.attach('0x70997970c51812dc3a010c7d01b50e0d17dc79c8');
        const result = await donateContract.donate({value: taskArgs.amount});

        console.log(result.hash);
    });

task("withdraw", "Donate eth")
    .addParam('account', 'Withdraws account')
    .setAction(async (taskArgs) => {
        const DonateContract = await ethers.getContractFactory('Donate');
        const donateContract = await DonateContract.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3');
        const result = await donateContract.withdrawDonations(taskArgs.account);
        web3.eth.getGasPrice()
            .then(console.log);
        console.log(result.hash);
    });

module.exports = {};
