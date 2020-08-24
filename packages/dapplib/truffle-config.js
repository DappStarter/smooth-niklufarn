require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard rescue pizza horn install credit frame symbol'; 
let testAccounts = [
"0x7998ae8397620c93a825022bd90ebd5a64baa0584c727768ea437089a8a26cff",
"0x94050d21e15b3ecce8aef04eb0906558fa3c498eb0ef761293a3466e9773341e",
"0x15dd10606e6b535b5007acb56bd6b03554e1a6d97ad3c46ffae72479036d7ba3",
"0xd4390e57bb94a073c5b39fbffd677faa6d9b22a2401addd970ec64093b31db6c",
"0x177b86709bbe763fc0fb6b812189b2f34544b3a6e09074aeee0bbe915b7173f9",
"0x611d95e27113d93b0579eae726fcbbab4be1448015f95a2d91db505927dd0077",
"0x1b0356fb78cc8822fda32bf1fd16dbd43205734ea758dada6d4a68e2dee48903",
"0x5a8289f158785093d672fd169ae60897fde7ecddd1febc6cd9f55f239b245dbd",
"0x2ca0a5b21c16bffae08648e1c580d6c8f858aad6cc8d2f9e6f4d8c432adc023f",
"0x70d6cc4db409fe919859bd271f194cd1d3cfabe5b39247acde7fa159820d6484"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
