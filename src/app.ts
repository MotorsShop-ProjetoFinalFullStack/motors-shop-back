import express, { Application } from "express";
import { announcementRoutes } from "./routes/announcement.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middlewares";

const app: Application = express();
app.use(express.json());
app.use("/announcement", announcementRoutes);
app.use(handleAppErrorMiddleware);
export default app;
