const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id ='5bb10d3f6488ff2c8c0969eb';

// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id',todo);
// }).catch((e)=>console.log(e));

User.findById(id).then((user)=>{
if(!user){
  return console.log('user not found');
}
console.log(JSON.stringify(user,undefined,2));
  console.log('User Found :',user);
}).catch((e)=>console.log(e));
