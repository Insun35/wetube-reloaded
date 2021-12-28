import express from "express";

const app = express();

const handleHome = () => console.log("Sombody is trying to get homepage!")

app.get("/", handleHome)

const handleListener = () => console.log("✅Your server is listening to 4000port!");

app.listen(4000, handleListener);
