import express from "express";
import bodyParser from "body-parser";
import connectDB from "./db.js";
import disModel from "./model/distModel.js";
import Haversine_Formular from "./utility/haversine.js";

const app = express();
const router = express.Router();
app.use(express.json());
connectDB();

app.post("/calcDist", async (req, res) => {
  const { lat1, lat2, lon1, lon2 } = req.body;
  if (!lat1 || !lat2 || !lon1 || !lon2) {
    return res.status(400).json({ message: "All field are required" });
  }

  try {
    const haversine = new Haversine_Formular();
    const distance = haversine.disTrav(lat1, lat2, lon1, lon2);

    const newDistance = new disModel({
      lat1,
      lat2,
      lon1,
      lon2,
      distance,
    });

    await newDistance.save();
    return res.status(201).json({
      message: "Distance calculation saved to the database.",
       newDistance
    });
  } catch (error) {
    res.status(500).json({ message: "Error from us" });
  }
});
app.listen(2060, () => {
  console.log("We can hear you");
});
 