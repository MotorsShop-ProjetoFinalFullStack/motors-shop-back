import "express-async-errors";
import express, { Application } from "express";
import { announcementRoutes } from "./routes/announcement.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middlewares";
import { userRoutes } from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";

const app: Application = express();
app.use(express.json());

app.use("/announcements", announcementRoutes);
app.use("/users", userRoutes)
app.use("/login", loginRoutes)

app.use(handleAppErrorMiddleware);

export default app;
