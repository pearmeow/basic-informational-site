import { createServer } from "node:http";
import { URL } from "node:url";
import * as fs from "node:fs/promises";

const hostname = "127.0.0.1";
const port = "8080";

const server = createServer(async (req, res) => {
    const theUrl = new URL(`http://${hostname}:${req.url}`);
    if (theUrl.pathname === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        const html = await fs.readFile("./index.html");
        res.end(html);
    } else if (theUrl.pathname === "/contact-me") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        const html = await fs.readFile(`.${theUrl.pathname}.html`);
        res.end(html);
    } else if (theUrl.pathname === "/about") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        const html = await fs.readFile(`.${theUrl.pathname}.html`);
        res.end(html);
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        const html = await fs.readFile("./404.html");
        res.end(html);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
