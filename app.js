const express = require('express')
const app = express()
const connectDB = require('./models/db')
require('dotenv').config()


app.use(express.static('public'));
app.use(express.json());


const PORT =process.env.PORT || 8000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
};
start()

