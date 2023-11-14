import mongoose from "mongoose";


const connectDB=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/tuor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
};
export default connectDB;