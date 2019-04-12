let signveri = require('./index.js');

signveri.signMessage("Test Message", "0x0123456789012345678901234567890123456789012345678901234567890123").then(sig => {
    console.log(sig);
    return signveri.verifyMessage("Test Message", sig, "0x14791697260E4c9A71f18484C9f997B308e59325")
}).then(console.log);