const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})
//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()
Todo.findOneAndRemove({_id:'5bb236528e6ac33dec644d1c'}).then((todo)=>{
console.log(todo);
});

Todo.findByIdAndRemove('5bb236528e6ac33dec644d1c').then((todo)=>{
console.log(todo);
});
