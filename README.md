# eth-sign-verify

Sign messages and verify signatures on-chain with ethersj.

## Installation

```
npm install eth-sign-verify --save
```

## Methods


### signMessage(message, privateKey)

Returns signature object:  { r, s, v }.

### verifySignature(message, signatureObject, expectedAddress)

Returns true or false.
