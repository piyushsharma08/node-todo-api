const {ObjectID} = require('mongodb');

const {mongoose}= require('./../server/db/mongoose');
const {User}= require('./../server/models/user');
const {Todo}= require('./../server/models/todo');


// Todo.remove().then((result)=>{     //to remove all entries
//     console.log(result);             //remove() do not return the removed entries
// })

//Todo.findOneAndRemove              //both return entries removed
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5c168a62a73604eb3b6ca4b1').then((todo)=>{
    console.log(todo);
});