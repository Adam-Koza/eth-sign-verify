let signveri = require('./index.js');
let ethers = require('ethers');

signveri.signMessage("Test Message", "0x0123456789012345678901234567890123456789012345678901234567890123").then(sig => {
    console.log(sig);
    let wallet = new ethers.Wallet("0x0123456789012345678901234567890123456789012345678901234567890123");
    return signveri.verifyMessage("Test Message", sig, wallet.address)}).then(console.log);