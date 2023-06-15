import "express-async-errors";
import express, { Application } from "express";
import { announcementRoutes } from "./routes/announcement.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middlewares";

const app: Application = express();
app.use(express.json());
app.use(handleAppErrorMiddleware);
app.use("/announcement", announcementRoutes);
export default app;
