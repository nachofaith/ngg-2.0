const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nggDB",
});

app.get("/", (req,res)=>{
    res.json("Hola esto es el Backend")
})

app.get("/producto",(req,res)=>{
    const q = "SELECT * FROM Producto";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });   
})

app.post("/producto",(req,res)=>{
    const q = "INSERT INTO Producto (`nombreProducto`,`descProducto`,`precioNormalProducto`,`precioOfertaProducto`,`marcaProducto`)";
    const values = [""]
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });   
})


app.listen(3001, ()=>{
    console.log("Conectado al backend")
})


// const producto = "SELECT * FROM Producto";
// conexion.query(producto,function(err,listar){
//     if(err){
//         throw err;
//     }else{
//         console.log(listar);
//         console.log("conexion exitosa");

//     }

// })

// conexion.end();




