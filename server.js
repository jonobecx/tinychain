async function main(callback) {
    // Express initialization
    const express = require('express');
    const bodyParser = require('body-parser');
    const server = null,
        app = express(),
        PORT = process.env.TINYCHAIN_PORT || 3030;

    // Node initialization
    const Node = require('./controller/node').Node;
    const node = new Node();

    //support parsing of application/x-www-form-urlencoded post data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/', express.static('view'));

    app.get('/initialize', async () => {
        await bz.createDB();
    });

    app.get('/peers', async (request, response) => {
        response.send(await bz.read('node'));
    });
    app.post('/peers', async (request, response) => {
        let node = JSON.parse(await bz.read('node'));
        node.peers.push(request.body.peer_id);
        response.send('Peer added.');
    });

    process.on('exit', () => {
        console.log('shutting down database');
        bz.close();
    });

    return app.listen(PORT, callback);
}
if (require.main === module) {
    main(() => {
        console.log(`listening on port ${PORT}`);
    }).catch(e => { throw e; });
}

exports.run = main;