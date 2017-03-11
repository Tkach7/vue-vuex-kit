const liveServer = require("live-server");
const params = {
    port: 5000,
    root: "./dist",
    host: "localhost",
    open: false,
    file: "index.html",
    wait: 1000,
    logLevel: 2,
};
//* Start live-server */
liveServer.start(params);