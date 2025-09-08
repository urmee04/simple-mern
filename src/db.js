import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/simple-mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;
