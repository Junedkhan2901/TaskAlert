import { v4 as uuidv4 } from 'uuid';
import { checkDatabase } from "../Controllers/auth.js";
import mysql from "mysql2";
let users = [];

let con = mysql.createPool({
    // connection pool configuration...
    host: "localhost",
    user: "root",
    password: "",
    database: "task",
    multipleStatements: true,
    port: "3306",
});

export const CreateUser = (req, res) => {
    console.log('POST ROUTE CALLED');
    const user = req.body;
    let id = req.body.id
    let name = req.body.name
    let age = req.body.age;
    let address = req.body.address;
    checkDatabase();
    try {
        console.log(req.body);
        var sql = `INSERT INTO users (id,name,age,address)VALUES('${id}','${name}','${age}','${address}')`;
        con.query(sql, function (err, results) {
            if (err) {
                console.log("error");
                res.send("error")
            } else {
                console.log("Users:", results);
                res.send(results);
                con.end();
            }
            // con.end(); // Close the database connection
        });
    }
    catch {
        res.send(error);
    }
    // users.push({ id: uuidv4(), ...user });
};

export const getUser = (req, res) => {
    checkDatabase();
    // var sql = `select * from user`
    // res.send(sql);
    var sql = `SELECT * FROM users`;
    con.query(sql, function (err, results) {
        if (err) {
            console.error("Error retrieving users:", err);
        } else {
            console.log("Users:", results);
            res.send(results);
        }
        // con.end(); // Close the database connection
    });
}

export const getUserbyId = (req, res) => {

    const { id } = req.params;
    checkDatabase();
    var sql = `SELECT * FROM users WHERE id = '${id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error retrieving users:", err);
        } else {
            console.log("Users:", result);
            res.send(result);
            con.end();
        }
        // con.end(); // Close the database connection
    });
    // const foundUser = users.find((user) => user.id === id);
    // res.send(foundUser);
};

export const UserbyId = (req, res) => {

    checkDatabase();
    const { id } = req.params;
    var sql = `DELETE  FROM users WHERE id = '${id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error retrieving users:", err);
            res.send("error")
        } else {
            console.log("Users:", result);
            res.send(result);
            con.end();
        }
        // Close the database connection
    });
    // res.send('user deleted');
    // users = users.filter((user => user.id != id));

};

export const UpdateUserbyID = (req, res) => {

    const { id } = req.params;
    let name = req.body.name;
    let age = req.body.age;
    let address = req.body.address;
    checkDatabase();
    let sql = `UPDATE users SET name = '${name}', age = '${age}', address = '${address}' WHERE id = '${id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error retrieving users:", err);
            res.send("error")
        } else {
            console.log("Users:", result);
            res.send(result);
        }
        // Close the database connection
    });
    // const { firstname, lastname, age } = req.body;
    con.end();
    // const user = users.find((user) => user.id === id);


    // if (firstname) user.firstname = firstname;
    // if (lastname) user.lastname = lastname;
    // if (age) user.age = age;
    res.send('user updated');
}