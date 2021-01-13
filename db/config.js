const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/resfulapi', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('DB connection successfull');
}).catch(() => {
    console.log('DB connection Failed!');
});