const mongoose = require('mongoose');

if(process.env.USERDB === "" && process.env.PASSDB === "") {
    mongoose.connect('mongodb://'+ process.env.HOSTDB +':'+ process.env.PORTDB +'/' + process.env.DBNAME, { useNewUrlParser: true });
} else {
    mongoose.connect('mongodb://'+ process.env.USERDB +':'+ process.env.PASSDB +'@'+process.env.HOSTDB +':'+ process.env.PORTDB +'/' + process.env.DBNAME, { useNewUrlParser: true });
}