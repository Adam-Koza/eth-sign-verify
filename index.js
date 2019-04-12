let ethers = require('ethers');

// Starter provided by: https://docs.ethers.io/ethers.js/html/cookbook-signing.html?highlight=message#signing-a-string-message

let abi = [
    "function verifyString(string, uint8, bytes32, bytes32) public pure returns (address)"
];

let provider = ethers.getDefaultProvider('ropsten');
let contractAddress = '0x80F85dA065115F576F1fbe5E14285dA51ea39260';
let contract = new ethers.Contract(contractAddress, abi, provider);

async function signMessage(message, privateKey) {
    // Create wallet
    let wallet = new ethers.Wallet(privateKey);
    // Sign the string message
    let flatSig = await wallet.signMessage(message);
    // For Solidity, we need the expanded-format of a signature
    let sig = ethers.utils.splitSignature(flatSig);
    return sig;
}

async function verifyMessage(message, sig, address) {
    // Call the verifyString function (blockchain).
    let recovered = await contract.verifyString(message, sig.v, sig.r, sig.s);
    return recovered == address;
}

module.exports = { verifyMessage, signMessage }