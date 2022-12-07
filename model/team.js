import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  players: {
    type: Array
  }
});

export default mongoose.model("Team", teamSchema);
