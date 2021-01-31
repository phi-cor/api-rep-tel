const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'rep_tel'
});


exports.get =()=>{
    
    pool.query('SELECT * from user', (error, results, fields) => {
        if (error) { throw error }
        console.log(results[0]);
        const str= JSON.stringify(results);
        return JSON.parse(str);
        
    }
    )
}
/*
    [
        {
            fname: 'Lola',
            lname: 'Ballot',
            tel: '00112233',
            _id: "0"
        },
        {
            fname: 'Albert',
            lname: 'Ballot',
            tel: '04112244',
            _id: "1"
        }
    ];
    */
exports.new = (contact) => {
    /*
    this.get.push(contact);
    */
   

   pool.query(`INSERT INTO user (lname,fname,tel) VALUES(${contact.lname},${contact.fname},${contact.tel})`, 
   
   (error, results, fields) => {
    if (error) { throw error }
    console.log(results[0]);
    const str= JSON.stringify(results);
    return JSON.parse(str);
    
}
)
};
exports.del = (contact) => {
    pool.query(`DELETE FROM user WHERE user.id=${contact.id}`,
    (error, results, fields) => {
        if (error) { throw error }});
    /*
    const found = this.get.find(element => element._id === contact);
    this.get.splice(this.get.indexOf(found), 1);*/
    
};
exports.update = (contactId, newContact) => {
    pool.query(`UPDATE user SET lname=${contact.lname}, fname=${contact.fname}  tel=${contact.tel} WHERE user.id=${contactId}`,
    (error, results, fields) => {
        if (error) { throw error }});
    /*
    const found = this.get.find(element => element._id === contactId);
    this.get[this.get.indexOf(found)] = newContact;
    */
};

