class DBConnection {
    constructor() {

        if (!!DBConnection.instance){          
            return DBConnection.instance;
        }
        
        DBConnection.instance = this;

        return this;
    }

    connect(dbname) {
        console.log("Connect in: " + dbname);
    }

    disconnect() {
        console.log("Disconnect");
    }
}

exports.DBConnection = DBConnection;

