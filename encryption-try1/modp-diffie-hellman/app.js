const crypto = require("crypto");

//client 1 :
const alice = crypto.getDiffieHellman('modp15');
console.log(alice);
//client 2 :
const bob = crypto.getDiffieHellman('modp15');

// console.log(alice.getPrime().toString('hex'));

//client 1 :
alice.generateKeys();

//client 2 :
bob.generateKeys();

// client 1 :
const alicePublicKey = alice.getPublicKey();
const alicePrivateKey = alice.getPrivateKey();
//client 2 :
const bobPublicKey = bob.getPublicKey();
const bobPrivateKey = bob.getPrivateKey();
//from client 1, client 2 :
const GlobalParameters = {
  alicePublicKey,
  bobPublicKey
}

//client 1:
const AliceLocalParamenters ={
  alicePublicKey,
  alicePrivateKey,
  sharedKey :"",
}
// console.log(AliceLocalParamenters.alicePrivateKey.toString('hex'));
// console.log(AliceLocalParamenters.alicePublicKey.toString('hex'));


//client2:
const BobLocalParameters = {
  bobPublicKey,
  bobPrivateKey,
  sharedKey :"",
}
// console.log(BobLocalParameters.bobPrivateKey.toString('hex'));
// console.log(BobLocalParameters.bobPublicKey.toString('hex'));




//client 1 :
const aliceSharedSecret = alice.computeSecret(GlobalParameters.bobPublicKey,null,'hex');
AliceLocalParamenters.sharedKey = aliceSharedSecret;

//client 2 :
const bobSharedSecret = bob.computeSecret(GlobalParameters.alicePublicKey,null,'hex');
BobLocalParameters.sharedKey = bobSharedSecret;


// console.log(AliceLocalParamenters.sharedKey == BobLocalParameters.sharedKey);
