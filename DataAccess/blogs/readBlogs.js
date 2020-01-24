const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require("mongodb").ObjectId;
require('dotenv').config()


// Connection URL
const url = process.env.ATLAS_CONNECTION

const dbName = 'ToDoProject';
const settings = {
    useUnifiedTopology: true
}

const readBlogs = () => {
    let iou = new Promise((resolve, reject) => {
    // Use connect method to connect to the server
    console.log("connecting to db...")
        MongoClient.connect(url, settings, function (err, client) {
            if(err){
            reject(err)
            }else{
                console.log("Connected to server to read blog posts");

                const db = client.db(dbName);
                // Get the contacts collection
                const collection = db.collection('blogPosts');
                // Find some documents
                collection.find({}).toArray(function (err, docs) {
                    if(err){
                        reject(err)
                    }else{
                        const results = {
                            data: docs,
                            msg: "Found the following records"
                        }
                        console.log(results.data[0])
                        client.close();
                        resolve(results);
                    }
                });
            }
        });
    })
    return iou;
}

module.exports = {readBlogs}