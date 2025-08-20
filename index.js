import { createServer } from "node:http";
import { URL } from "node:url";

const hostname = "127.0.0.1";
const port = "8080";

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Mow");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
