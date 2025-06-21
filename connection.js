
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log(`Connection successful with database`);
}).catch((e) => {
    console.log(`Error connecting to MongoDB: ${e.message}`);
});

module.exports = mongoose.connection;
