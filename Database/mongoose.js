import { connect, connection } from "mongoose";

const connecting = {
  isConnect: false,
};

export async function dbConnect() {
  if (connecting.isConnect) return;
  const db = await connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
    connecting.isConnect = db.connections[0].readyState;
    console.log(db.connection.db.databaseName);
}

connection.on("connected", () => {
    console.log("mongodb connected successfully");
    
});
connection.on("error", (err) => {
  console.log("mongo error", err.message);
});