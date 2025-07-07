// require('dotenv').config({ path: require('path').resolve(__dirname, '../config.env') });
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;
const User = require('./models/user.model');


app.use(express.json());

// Default Route GET (/)
app.get('/', (req, res) => {
    res.send('Hello in nodejs-app-starter');
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

 connectDB();


 User.find()
 .then(users => {
   console.log(`Users: ${users}`);
 })
 .catch(err => {
   console.error(`Error fetching users: ${err.message}`);
 }); 
