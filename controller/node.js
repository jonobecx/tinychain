/**
 * Code for a Peer to peer node
 */

// Bluzelle initialization
const { bluzelle } = require('bluzelle');
const fs = require('fs-extra');
const BLUZELLE_AUTH = 'bluzelle.auth.json';
if (!fs.existsSync(BLUZELLE_AUTH)) {
    throw new Error(BLUZELLE_AUTH + ' does not exist');
}
const bz_config = fs.readJSONSync(BLUZELLE_AUTH);
const bz = bluzelle(bz_config);
delete bz_config.key;

 function Node(id, peers) {
     this.id = "";
     this.peers = [];
 }
 
 Node.prototype.JSON = function () {
    return {
        id: this.id,
        peers: this.peers
    };
 };

 Node.prototype.sync = async function () {
    this.peers.forEach(async (peer) => {
        let db = bluzelle({
            entry: bz_config.entry,
            uuid: peer
        });
        let transactions = JSON.parse(await db.read('transactions'));
        transactions.forEach(transaction => {
            if(this.transactions.indexOf(transaction) === -1) {
                this.transactions.push(transaction);
            }
        });
        let chain = JSON.parse(await db.read('chain'));
        if (chain.length > this.chain.length) {
            this.chain = chain;
        }
    });
 };

/**
 * Transaction Receiving and Broadcasting
 */

/**
 * Chain Receiving and Broadcasting
 */

/**
 * Mining
 */

module.exports = {
    Node: Node
};