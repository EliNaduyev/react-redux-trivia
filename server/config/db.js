const mysql = require('mysql')
// const dotenv = require('dotenv');
// dotenv.config()

const connectToMySqlDB = () => {
    try{
        const db = mysql.createConnection({
            host:'',
            user:'',
            password:'',
            database:''
        })
        db.connect()
    }catch(e){
        console.log(e)
    }
}

module.exports = connectToMySqlDB