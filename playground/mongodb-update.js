// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    //  db.collection('Todos').findOneAndUpdate({
    //      _id: new ObjectID("5c11177d235fed0da9fa10c5")
    //  },{
    //      $set: {
    //         completed: true 
    //      }
    //  },{
    //      returnOriginal: false
    //  }).then((result)=>{
    //      console.log(result);
    //  });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID("5c11123c235fed0da9fa0f7d")
    },{
        $set : {
            completed: true  ,
            name: 'Zeeshan'               //setting the value
        },
        $inc : {
            age: 1                           //incrementing the value
        }

    },{
        returnOriginal:false                 // return the original value 
    }).then((result)=>{
        console.log(result);
    });



    db.close();
});