var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
    host:"localhost",
    database: "user_db",
    user: "root",
    password:""
});

connection.connect((error)=>{
    if (error) {
        throw error;
    }else {
        var msg = "Connection Succesfull"
        console.log(msg.bgYellow.black)
    }
});

//Mostrar
connection.query('SELECT * FROM usuarios', (error, result, fields)=>{
    if(error) throw error;
        result.forEach(result =>{
            console.log(result)
        })
})

//Insertar
conection.query('insert into usuarios (name, fecha, descripcion) values ("Mercedes", "Marzo", "Charcutero")', (error, results, field)=>{
    if(error) throw error;
    console.log(("!Registro arreglado!").green, results)
})

//Actualizar
conection.query('UPDATE usuarios SET name="Steve", fecha="Enero", descripcion="Policia" WHERE id=3', (error,results)=>{
    if(error) throw error;
    console.log("!Registro Actualizado!", results)
})

//Eliminar
conection.query('DELETE FROM usuarios WHERE id = 6', (error, results)=>{
    if(error) throw error;
    console.log("!Registro Eliminado", results)
})

conection.end()