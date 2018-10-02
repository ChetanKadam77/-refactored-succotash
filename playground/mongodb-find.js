//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
 if(err){
   return console.log('Unable to connect to MongoDB Server');
 }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bb0e5fab2db24e52d6795ef')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to fetch the records',err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // },(err)=>{
  //   console.log('unable to fetch the records',err);
  // });

  db.collection('Users').find({name:'Batman'}).toArray().then((docs)=>{
    console.log('Inside Todos DB');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log('unable to fetch from DB.');
  });

  //client.close();
});
