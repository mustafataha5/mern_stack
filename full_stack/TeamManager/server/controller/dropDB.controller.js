const mongoose = require('mongoose');

module.exports.dropDatabase = (req, res) => {
    const db = mongoose.connection;

    // Drop the entire database
    db.dropDatabase()
        .then(() => {
            res.json({ message: "Database dropped successfully" });
        })
        .catch(err => {
            res.status(500).json({ message: "Error dropping database", error: err });
        });
};