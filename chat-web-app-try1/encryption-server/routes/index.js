var express = require('express');
var router = express.Router();
let crypto = require('crypto');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// USED BY : user1 and user2 to make their pair of public, private keys
//localhost:5500/generate-key-pair-rsa
router.get('/generate-key-pair-rsa',(req,res)=>{
  const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa',{
    modulusLength:2048,
    publicKeyEncoding:{
      type:'spki',
      format:'der'
    },
    privateKeyEncoding:{
      type:'pkcs8',
      format:'der'
    }
  })

  res.send({publicKey:publicKey.toString('base64'),privateKey:privateKey.toString('base64')});
})

// USED BY : user1 and user2 to make their pair of public, private keys
//localhost:5500/generate-key-pair-ecdh
router.get('/generate-key-pair-ecdh',(req,res)=>{
   const user = crypto.getDiffieHellman('modp15');
   // const user = crypto.createECDH('secp521r1');
  console.log(user);

  user.generateKeys();
  const publicKey = user.getPublicKey();
  const privateKey = user.getPrivateKey();
  // res.send({publicKey,privateKey})
  // let fuser = {...user}
  res.send({publicKey:publicKey.toString('base64'),privateKey:privateKey.toString('base64'),user:user.getPrime().toString('hex')});

})





// USED BY : user1 to send first message to user2
// localhost:5500/sign ===hash the data and sign it
router.post('/sign',(req,res)=>{
  let data = req.body.data;
  let privateKey = req.body.privateKey;

  privateKey = crypto.createPrivateKey({
    key:Buffer.from(privateKey,'base64'),
    type:'pkcs8',
    format:'der'
  })

  const sign = crypto.createSign('SHA256');
  sign.update(data);
  sign.end();
  const signature = sign.sign(privateKey).toString('base64');

  res.send({data,signature})

})

// USED BY : user2 to verify the message sent by user1 :
//localhost:5500/verify
router.post('/verify',(req,res)=>{
  let {data,publicKey,signature} = req.body;

  publicKey = crypto.createPublicKey({
    key:Buffer.from(publicKey,'base64'),
    type:'spki',
    format:'der'
  })

  const verify = crypto.createVerify('SHA256');
  verify.update(data);
  verify.end()

  let result = verify.verify(publicKey,Buffer.from(signature,'base64'))

  res.send({verify: result})

})


// once verification is done : creating the shared secret key to encrypt using aes ahead

router.post('/create-shared-secret',(req,res)=>{
  let {otherPublicKey,user} = req.body;
  otherPublicKey = Buffer.from(otherPublicKey,'base64');
  user = Buffer.from(user,'hex');
  const sharedSecret = user.computeSecret(otherPublicKey,null,'hex');
  return({sharedSecret});
})

// encrypt message using aes

module.exports = router;
