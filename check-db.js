const mongoose = require('mongoose');

const uri = "mongodb://ParthPlastoPack:parth12345@ac-5lthuxp-shard-00-00.p8exhpe.mongodb.net:27017,ac-5lthuxp-shard-00-01.p8exhpe.mongodb.net:27017,ac-5lthuxp-shard-00-02.p8exhpe.mongodb.net:27017/parthPlastoPack?ssl=true&replicaSet=atlas-nuhd2f-shard-0&authSource=admin&retryWrites=true&w=majority";

async function run() {
  try {
    await mongoose.connect(uri);
    const db = mongoose.connection.db;
    const products = await db.collection('products').find({}).limit(5).toArray();
    console.log("Sample products specifications:");
    products.forEach(p => {
      console.log(p.slug, "->", JSON.stringify(p.specifications));
    });
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.disconnect();
  }
}

run();
