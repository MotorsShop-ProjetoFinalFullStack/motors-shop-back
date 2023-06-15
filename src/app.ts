import "express-async-errors";
import express, { Application } from "express";
import { announcementRoutes } from "./routes/announcement.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middlewares";
import { userRoutes } from "./routes/user.routes";

const app: Application = express();
app.use(express.json());

app.use("/announcement", announcementRoutes);
app.use("/users", userRoutes)

app.use(handleAppErrorMiddleware);

export default app;
