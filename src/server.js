import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");
app.use(logger);


const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req,res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

 


app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


const handleListener = () => console.log("✅Your server is listening to 4000port!");

app.listen(4000, handleListener);
