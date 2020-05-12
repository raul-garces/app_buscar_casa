var  mysql = require("mysql");
var conexion = mysql.createConnection({
    host : "localhost",
    database : "user",
    password : "",
    
}); 


conexion.connect(function(err){
    if (err){
        console.log("error in conexion" + err.stack);
        return; 
    }

    console.log("conexion ok" + conexion.threadId);

})

conexion.query("select * form user ", function ( error,result ,fields){
    if (error)
    throw error;

    result.forEach( result=> {
        console.log(result);
    });
});

conexion.end();