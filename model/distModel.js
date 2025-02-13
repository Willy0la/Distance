
import mongoose, { Schema } from "mongoose"
 const distTrav = new mongoose.Schema({
    lat1:{type: Number, required:true},
    lat2:{type: Number, required:true},
    lon1:{type: Number, required:true},
    lon2:{type: Number, required:true},
    distance: { type: Number, required: true },
    time: { type: Date, default: Date.now }
 })

 const disModel =  mongoose.model("Distance", distTrav)

 export default disModel;