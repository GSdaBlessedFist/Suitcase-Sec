import mongoose from 'mongoose'

const connection = {} /* creating connection object*/
mongoose.set("strictQuery", false);
async function dbConnect() {
  if (connection.isConnected) {
    console.log("already connected")
    // mongoose.connection.db.listCollections().toArray(function (err, names) {
    //     console.log(names); // [{ name: 'dbname.myCollection' }]
    //     //module.exports.Collection = names;
    // });
    return
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect


