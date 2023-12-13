import dotenv from "dotenv";
import express from "express";
import { register } from "@reflet/express";
import { LocationRouter } from "routes/locations.route";

dotenv.config();

const PORT = process.env.API_PORT || 4000;

const app = express();

register(app, [LocationRouter]);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
