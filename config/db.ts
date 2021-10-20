import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://dbPosts:passtoposts@cluster0.pnvk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(() => {
    console.log('Not connected to DB');
  });

module.exports = mongoose.connection;
/*const { MongoClient } = require('mongodb');

// Replace the following with your Atlas connection string
const url =
  'mongodb+srv://dbPosts:passtoposts@cluster0.pnvk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'test';

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    const col = db.collection('posts');
  } catch (err: any) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);*/
