import mysql from "mysql2";

export const checkDatabase = function () {
    let con = mysql.createPool({
        // connection pool configuration...
        host: "localhost",
        user: "root",
        password: "",
        database: "task",
        multipleStatements: true,
        port: "3306",
    });

    con.getConnection(function (err, connection) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Connection Successful");
            // res.send("connection sucessful");
        }
    });
};




