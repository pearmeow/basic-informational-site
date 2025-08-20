const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/contact-me", (req, res) => res.send(__dirname + "/contact-me.html"));
app.get("/about", (req, res) => res.send(__dirname + "/about.html"));
app.all("/*splat", (req, res) => res.sendFile(__dirname + "/404.html"));

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
