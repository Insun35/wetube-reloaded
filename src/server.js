import express from "express";

const app = express();

const logger = (req,res,next) => {
    console.log(`${req.method}:${req.url}`);
    next();
};

const protectPivate = (req,res,next) => {
    const url = req.url;
    if(url == "/private"){
        return res.send("Access denied!");
    } else {
        console.log("Allowed!");
        next();
    }
}

const handleHome = (req, res) => {
    return res.send("Welcome to the Homepage!");
};

const handlePrivateLounge = (req, res) => {
    return res.send("Here is private Lounge");
};

app.use(logger);
app.use(protectPivate);
app.get("/private", handlePrivateLounge);
app.get("/", handleHome);

const handleListener = () => console.log("✅Your server is listening to 4000port!");

app.listen(4000, handleListener);
