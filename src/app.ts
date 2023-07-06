import "express-async-errors";
import express, { Application } from "express";
import { announcementRoutes } from "./routes/announcement.routes";
import { userRoutes } from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";
import cors from "cors"
import { commentRoutes } from "./routes/comment.routes";
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"
import { handleErrors } from "./errors";

const app: Application = express();
app.use(express.json());
app.use(cors())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use("/announcements", announcementRoutes);
app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/comments", commentRoutes)

app.use(handleErrors);

export default app;
