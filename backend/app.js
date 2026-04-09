import express from "express";
import cors from "cors";
import safetyRoutes from "./routes/safetyRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/safety", safetyRoutes);

export default app;
