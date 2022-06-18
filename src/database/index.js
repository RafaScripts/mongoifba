import mongoose from "mongoose";

const mongoDB_URL = "mongodb+srv://main:032211@geral.el57i.mongodb.net/?retryWrites=true&w=majority";

export const dbConnect = () => {

    return new Promise(resolve => {

        //mongoose.Promise = require(`bluebird`)
        // mongoose.set('debug', true)
        //mongoose.set('useCreateIndex', true)
        //mongoose.set('useFindAndModify', false);

        mongoose.connect(mongoDB_URL);

        mongoose.connection.on(`connected`, () => {
            console.log(`Mongoose connected to ${mongoDB_URL}`);
            resolve();
        });

        const db =  mongoose.connection;

        mongoose.connection.on(`error`, error => {
            console.log(`MongoDB error => `, error)
        })
        db.on('error', console.error.bind(console, 'connection error:'));
        db.on('connected', resolve);
    });
}