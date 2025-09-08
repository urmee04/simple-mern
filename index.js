import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import "dotenv/config";
import taskRoutes from "./src/routes/tasks.js";
import "./src/db.js";

//ES modules equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//security middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

//CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
});
app.use(limiter);

//logging
app.use(morgan("dev"));

//body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

//test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

//task routes
app.use("/api/tasks", taskRoutes);

//serve static files from React app
// app.use(express.static(path.join(__dirname, "..", "client/build")));

//The "catchall" handler for React routing
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
// });

//global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

//use port from .env (5000) or default to 5001
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`CORS enabled for: http://localhost:3000`);
  console.log(
    `MongoDB connected to: ${process.env.MONGO_URI || "mongodb://localhost/simple-mern"}`
  );
});
