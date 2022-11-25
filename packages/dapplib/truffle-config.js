require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain snow harvest derive swing turn'; 
let testAccounts = [
"0x6723efdac9eefd9e28c431e59bed61784a0768827bc71e7bc1629696cc46901b",
"0x6af49582311837105946972c8d8186af70dfa44f8c22282ec7acab0054c248c1",
"0xe71a787952b532c27ae2570c57fe72c8e904b6c45b6e94b68352cb0a7f985229",
"0x63ce8dd5ce6fbfae908fae82dfa1f42a69af74f876bf5526b98e1607648dda96",
"0x09d49d1af7c74c68bf5fe5bf63fdf862ba8860cb00cfae766bcb269d4b14ea21",
"0xd3101135e473c7d0d7a9275ca346bf95e6bbea1e21d0c039780dccaa35a9f906",
"0x04af25068527076bacc61a0c532787ee03cb3dc955f1519645b11c12b59816bf",
"0xfa28f64ce439374fd599a41a48d2b425301dc9f40eb8f38a338919b5fbf2afe7",
"0x7acab2ae78d5f5d1c28fde375e310664cdf3bbb10d7c145f6f7929b490f84561",
"0x07640ca71fe5eeba5f5d474c02aef0a035ed67189680129f7f2fbf4fa586d2a7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

