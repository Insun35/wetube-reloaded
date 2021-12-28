import express from "express";

const app = express();

const logger = (req,res,next) => {
    console.log(`${req.method}:${req.url}`);
    next();
}

const handleHome = (req, res) => {
    return res.send("Welcome to the Homepage!");
};

const handlePrivateLounge = (req, res) => {
    return res.send("Here is private Lounge");
};

app.get("/private", logger, handlePrivateLounge);

app.get("/",logger, handleHome);

const handleListener = () => console.log("✅Your server is listening to 4000port!");

app.listen(4000, handleListener);
