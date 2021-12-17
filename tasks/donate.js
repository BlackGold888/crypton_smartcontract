require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");

task("balance", "Prints an account's balance")
    .setAction(async (taskArgs) => {
        const DonateContract = await ethers.getContractFactory('Donate');
        const donateContract = await DonateContract.attach('0x6Fef9107DF761dfB6a2a7EEc4AE6f2fBBa8Cb728');
        const balance = await donateContract.getBalance();
        console.log(balance.toString() + "ETH");
    });

task("donate", "Donate eth")
    .addParam("amount", "Donate values")
    .setAction(async (taskArgs) => {
        const DonateContract = await ethers.getContractFactory('Donate');
        const donateContract = await DonateContract.attach('0x6Fef9107DF761dfB6a2a7EEc4AE6f2fBBa8Cb728');
        const result = await donateContract.donate({value: taskArgs.amount});

        console.log(result.hash);
    });

task("withdraw", "Donate eth")
    .addParam('account', 'Withdraws account')
    .setAction(async (taskArgs) => {
        const DonateContract = await ethers.getContractFactory('Donate');
        const donateContract = await DonateContract.attach('0x6Fef9107DF761dfB6a2a7EEc4AE6f2fBBa8Cb728');
        const result = await donateContract.withdrawDonations(taskArgs.account);
        web3.eth.getGasPrice()
            .then(console.log);
        console.log(result.hash);
    });

module.exports = {};
