const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(url);

// Database Name
const dbName = 'equiposapi';

const insertar = function(coleccion, data) {
    client.connect(function(err, client) {
        if (err)
            throw err;
        console.log("Connected correctly to server");
  
        const db = client.db(dbName);
        db.collection(coleccion).insertOne(data, function(err, r) {
            throw err;
            client.close();
        });
    });    
}

module.exports = {
    insertar: insertar
}