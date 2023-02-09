const router = require('express').Router()
const Meters = require('../models/Meters')
const jwt = require("jsonwebtoken");
const verify = require('../middlewave/verify.middleware')

router.post('/', async (req, res) => {
    try {
        const newMeters = await new Meters(req.body).save()
        return res.status(200).json(newMeters)

    } catch (err) {
        return res.status(500).json(err)
    }

})

router.get('/', verify, async (req, res) => {
    try {
        const allNews = await Meters.find().sort({createdAt: -1})
        return res.status(200).json(allNews)
    } catch (err) {
        return res.status(500).json(err)
    }
})


module.exports = router
