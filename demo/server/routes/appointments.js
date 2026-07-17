const express = require('express');
const router = express.Router()
const { getAppointmentsByUserId, getUserById } = require('../data/dataStore');



router.get('/appointments/:userId', (req,res) => {
    try {
        const userId = req.params.userId
        const appointements = getAppointmentsByUserId(userId)
        res.status(200).json(appointements);
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error"})
    }
})


router.get('/users/:id', (req, res) => {
    try{
        const id = req.params.id
        const userInfo = getUserById(id)

        if (userInfo === undefined)
        {
            return res.status(404).json({ error: "User Not Found"})
        }

        res.status(200).json(userInfo);
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error"})
    }
})


module.exports = router;