const {ObjectID} = require('mongodb');

const {mongoose}= require('./../server/db/mongoose');
const {User}= require('./../server/models/user');
// const {Todo}= require('./../server/models/todo');


var id = "5c1250759c4f634b35017074";

User.findById(id).then((user)=>{
    if(!user){
        console.log('Id not found');
    }
    console.log('User',JSON.stringify(user, undefined,2));
}).catch((e)=> console.log(e));


// var id = '5c138fd4f92f65c20b5550d011';
// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// // Todo.find({
// //     _id: id
// // }).then((todos)=>{
// //     console.log('Todos',todos);
// // });

// // Todo.findOne({
// //     _id: id
// // }).then((todo)=>{
// //     console.log('Todo',todo);
// // });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//        return console.log('Id not found');
//     }
//     console.log('Todos',todo);
// }).catch((e)=> console.log(e));