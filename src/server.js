import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
    return res.send("Welcome to the Homepage!");
};

app.use(logger);
app.get("/", home);

const handleListener = () => console.log("✅Your server is listening to 4000port!");

app.listen(4000, handleListener);
