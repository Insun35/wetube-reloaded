import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);


app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


const handleListener = () => console.log("✅Your server is listening to 4000port!");

app.listen(4000, handleListener);
