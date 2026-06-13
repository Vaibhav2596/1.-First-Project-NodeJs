const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to the server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname : "Ranveer",
    lastname : "Singh",
    city : "Mumbai",
    phoneNumber : "9874587878"
  };

//   // Insert
//   const insertResult = await collection.insertMany([data]);
  const insertResult = await collection.insertOne(data);
  console.log("Inserted documents =>",insertResult);

//   // Read
//   const findResult = await collection.find({}).toArray();
//   console.log("Found documents =>", findResult);

// Count Documents
//   const countResult = await collection.countDocuments({});
//   console.log("Count of documents in the User collection => ", countResult);

// Find all the documents with a filter of firstname: Rasika

// const result = await collection.find({firstname : "Rasika"}).toArray();
// const result = await collection.find({firstname : "Rasika"}).count();
// console.log("Result is => ",result);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// Notes

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// Install mongodb package
// Create a connection from code
// Documents CRUD - Create, Read, Update, Delete
