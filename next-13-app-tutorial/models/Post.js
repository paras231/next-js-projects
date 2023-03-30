import mongoose from "mongoose";

const Postschema = new mongoose.Schema({
  title: {
    type: String,
  },
  img: {
    type: String,
  },
});

export default mongoose.models.Post || mongoose.model("Post", Postschema);
