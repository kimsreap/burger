// set up the code to connect to the MySQL
const {createConnection} = require('mysql2')
const db = createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Kim2019@',
    database:'burger_db'
})
// check if the connection is work
// db.connect(e => e ? console.log(e): console.log('successful connection.....'))

db.connect(e => {
    if (e){console.log(e)}
    db.query('SELECT * FROM burgerName', (e, data)=>{
        if(e){console.log(e)}
        data.forEach(({id,burger,devoured}) => 
        console.log(`
            Number: ${id}
            Name of Burger: ${burger}
            Dovourced: ${devoured}
        `))
        process.exit()
    })
});

module.exports = db;

