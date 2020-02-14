import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true
        })
        console.log('>>> DB is connected');
    }
    catch(e) {
        console.log('Something goes wrong with the connection to the DB!');
        console.log(e); 
    }
}