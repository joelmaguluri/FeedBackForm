const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://sudeepjoel:Sudeep745@ds249311.mlab.com:49311/sudeepdb', function(err){
    if(err){
        throw err;
    }
    console.log("Database connected");
});
