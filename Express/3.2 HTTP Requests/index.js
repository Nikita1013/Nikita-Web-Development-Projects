import express from "express";
const app = express();
const port = 3000

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p> My name is Nikita</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p> My phone no. is 1234567890");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
