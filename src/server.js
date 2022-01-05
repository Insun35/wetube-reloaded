import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
    return res.send("Welcome to the Homepage!");
};
const login = (req, res) => {
    return res.send("Login here");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListener = () => console.log("✅Your server is listening to 4000port!");

app.listen(4000, handleListener);
