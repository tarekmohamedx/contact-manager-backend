require('dotenv').config({ path: require('path').resolve(__dirname, '../config.env') });
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;
const auth = require('./routes/auth.routes');
const UserRepo = require('./repositories/user.repository');
const tokenManager = require('./utils/tokenManager');
const contactControler = require('./controllers/contact.controller');

app.use(express.json());

// Default Route GET (/)
app.get('/', (req, res) => {
    res.send('Hello in nodejs-app-starter');
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

 connectDB();


app.use('/api/auth', auth);
app.use('/api/contact', );


// const user = UserRepo.GetUserByUserName('user1').then((user) => {
//     console.log(user);
//     tokenManager.generateToken(user[0]).then((token) => {
//         console.log('Generated Token:', token);
//     }).catch((err) => { 
//         console.error('Error generating token:', err);
//     })
// }).catch((err) => {
//     console.error('Error fetching user:', err);
// })
