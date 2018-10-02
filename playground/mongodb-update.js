//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
 if(err){
   return console.log('Unable to connect to MongoDB Server');
 }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

// db.collection('Todos').findOneAndUpdate({
// _id : new ObjectID('5bb0ed1eb2db24e52d679836')
// },{
//   $set:{
//     completed: true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  name:'Batman'
},{
$set:{
name:'BATMAN'
},
$inc:{
  age:1
}
},{
  returnOriginal:false
}).then((result)=>{
  console.log(JSON.stringify(result,undefined,2));
});

  //client.close();
});
