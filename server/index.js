import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";


// logic and routes starts here
// **********************************************

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000; 
const CONNECTION_URL = `mongodb+srv://slmabookindia5:slambookindia5123@cluster0.pdgx9.mongodb.net/slambookindia5?retryWrites=true&w=majority`;

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    server.listen(PORT, () => {
      console.log(`connect to port ${PORT}`);
    })
  )
  .catch((error) => console.log(error));
