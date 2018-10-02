//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
 if(err){
   return console.log('Unable to connect to MongoDB Server');
 }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

//DeleteMany
// db.collection('Users').deleteMany({name:'Batman'}).then((result)=>{
//   console.log(result);
// });
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });
//DeleteOne
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });

//FindOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// });
db.collection('Users').findOneAndDelete({name:'Bruce Wayne'}).then((result)=>{
  console.log(result);
});

  //client.close();
});
