const mongoose = require('mongoose');
const connectDB = async () => {
try {
const conn = await mongoose.connect(
	"mongodb+srv://alfin:1234@percobaan.ol8nxu9.mongodb.net/docker?retryWrites=true&w=majority&appName=Percobaan"
);

console. log("MongoDB Connected");
} catch (error) {
console. error (error);
process. exit(1);
}
}

module.exports = connectDB