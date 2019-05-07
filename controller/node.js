/**
 * Code for a Peer to peer node
 */

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