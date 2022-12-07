import mongoose from "mongoose";

const roundSchema = new mongoose.Schema({
  team_a: {
    type: Number
  },
  team_b: {
    type: Number
  },
  court: {type: String},
  player_stats: {type: Array},
  time: {type: DateTime}
});

export default mongoose.model("Round", roundSchema);
