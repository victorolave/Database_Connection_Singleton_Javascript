var DBConnection = require('./DBConnection');

var conn = new DBConnection.DBConnection();
conn.connect("Employes");
conn.disconnect();

const conn2 = new DBConnection.DBConnection();
conn2.connect("Nomina");
conn2.disconnect();

console.log(conn === conn2 ? true : false);