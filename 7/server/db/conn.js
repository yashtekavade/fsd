const { MongoClient } = require("mongodb");

const Db =
  process.env.ATLAS_URI || "mongodb://localhost:27017/your-database-name";

const client = new MongoClient(Db, {
  useNewUrlParser: true, // Remove this line
  useUnifiedTopology: true, // Remove this line
});

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err) {
        console.error("Error connecting to MongoDB:", err);
        return callback(err);
      }

      // Verify we got a good "db" object
      if (db) {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB.");
      } else {
        console.error("Failed to connect to MongoDB.");
      }

      return callback(null);
    });
  },

  getDb: function () {
    if (!_db) {
      console.error("Database not connected.");
    }
    return _db;
  },
};
