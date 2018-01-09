'use strict';


module.exports = {
  BITCOIN_GENESIS_HASH: {
    livenet: '000005942766af8f99efd3b13fdf5be9ef43981273430f593c669cd1bfe4f586',
    regtest: '0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206',
    testnet: '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943', //this is testnet3
    testnet5: '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943' //this is testnet5
  },
  DB_PREFIX: new Buffer('ffff', 'hex')
};

