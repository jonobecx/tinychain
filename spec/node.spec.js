const request = require('request');
const server = require('../server');
let address = "http://localhost:3030";

const fs = require('fs-extra');
const validator = require('jsonschema').validate;

describe("A node", () => {
    var serverInstance;
    beforeAll(async function(done) { serverInstance = await server.run(done); });
    afterAll(function(done) { serverInstance.close(done); });

    it(" has a list of peer nodes", (done) => {
        request.get(address + "/peers", (error, response) => {
            expect(error).toBeNull();
            expect(response.statusCode).toBe(200);
            let result = validator(
                JSON.parse(response.body),
                fs.readJSONSync('model/node.json')
            );
            expect(result.valid).toBe(true, result.errors);
            done();
        });
    });
    xit(" has a list of transactions in a buffer.", () => {
        throw new Error("Not implemented");
    });
    xit(" can receive a transaction", () => {
        throw new Error("Not implemented");

    });
    xit(" can send a transaction to peers", () => {
        throw new Error("Not implemented");

    });
});