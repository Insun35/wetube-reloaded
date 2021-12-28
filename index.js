import express from "express";

const app = express();

const handleHome = (req, res) => {
    res.send("hello world!");
};

const handleLogin = (req, res) => {
    res.send("Login Here");
};

app.get("/login", handleLogin);

app.get("/", handleHome);

const handleListener = () => console.log("✅Your server is listening to 4000port!");

app.listen(4000, handleListener);
