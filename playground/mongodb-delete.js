// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{         //connection to the database
    if(err){
        return console.log('Unable to connect to MongoDB server');           
    }
    console.log('Connected to MongoDB server');
    
    //Delete many
    db.collection('Todos').deleteMany({text:'eat dinner'}).then((result)=>{
        console.log(result);
    });

   // deleteOne
    db.collection('Todos').deleteOne({text:'eat dinner'}).then((result)=>{
        console.log(result);
    });

    //findOneAnddelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });

    db.collection('Users').deleteMany({name:'xyz'}).then((result)=>{
        console.log(result.result);
    });
    db.collection('Users').findOneAndDelete({_id:new ObjectID("5c111214235fed0da9fa0f72")}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    });




    db.close();
});