const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database:"octa"
});



db.getConnection(()=>{
    console.log("Connection to the database succesfully")
});


module.exports = db;