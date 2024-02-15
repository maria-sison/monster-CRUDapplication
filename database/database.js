import mongoose from "mongoose";

mongoose.set('strictQuery', true);

// export const connectDB = async () => {
//   const url = `mongodb://127.0.0.1:27017/monstersdb`;
//   try {
//     const connection = await mongoose.connect(url, {
//       useUnifiedTopology: true,
//     });
//     console.log("Database connected successfully");
//   } catch (e) {
//     console.log("Failed to connect database:", e);
//   }
// };


const uri = "mongodb+srv://sisonm3:s07Bub98Q2K64RWl@cmpt315-monsterscrudapp.luzq7pe.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = async () => {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true} );
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } catch (err) {
            console.error("Error connecting to MongoDB Atlas!");
        }
    }
