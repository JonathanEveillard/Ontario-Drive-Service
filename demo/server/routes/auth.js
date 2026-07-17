const express = require('express');
const router = express.Router();
const { getUserByName } = require('../data/dataStore');

router.post('/auth', (req, res) => {

    try{
        const userName = req.body.fullName
        const user = getUserByName(userName)
        if (user === undefined)
        {
             return res.status(404).json({ error: "User Not Found"})
        }
        res.status(200).json({ id: user.id });
    }
    catch{
        res.status(500).json({ error: "Internal Server Error"})
    }
});

module.exports = router;
