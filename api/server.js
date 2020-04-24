const http = require("http");
const app  = require("./backend");

const PORT = 2020;

const server = http.createServer(app);

// Starting server
server.listen(PORT, () => console.log(`==========>>> Server started on port:${PORT} ===========>>`));
