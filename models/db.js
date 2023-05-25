const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

}).then(() => {
    console.log('connected to db...')
}).catch((error) => {
    console.log('error connecting to db', error)
})
}

module.exports = connectDB