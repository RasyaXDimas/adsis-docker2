const mongoose = require('mongoose');
const connectDB = async () => {
try {
const conn = await mongoose.connect(
    'mongodb+srv://rasyaxd:s3rv3rXD@cluster0.aufiscp.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');

console. log("MongoDB Connected");
} catch (error) {
console. error (error);
process. exit(1);
}
}

module.exports = connectDB