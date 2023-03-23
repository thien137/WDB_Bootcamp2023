import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";

const client = new MongoClient(uri);

interface Haiku {
  title: string;
  content: string;
}

async function run() {
  try {
    const database = client.db("insertDB");
    // Specifying a Schema is optional, but it enables type hints on
    // finds and inserts
    const haiku = database.collection<Haiku>("haiku");
    const result = await haiku.insertOne({
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    });
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
