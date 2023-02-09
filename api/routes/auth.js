const router = require('express').Router()
const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const verify = require('../middlewave/verify.middleware')
const config = require('config')

router.post('/register', async (req, res) => {
    try {
        const hashedpassword = await bcrypt.hash(req.body.password, 10)
        await new Admin({
            name: req.body.name,
            isAdmin: false,
            password: hashedpassword
        }).save()
        return res.status(200).json(req.body.name)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const admin = await Admin.findOne({name: req.body.name})
        if (!admin) return res.status(404).json('Login error')
        const validPassword = await bcrypt.compare(req.body.password, admin.password)
        if (!validPassword) return res.status(404).json('Login error')
        const token = jwt.sign({
            isAdmin: admin.isAdmin
        }, config.get('SECRET_KEY'), {expiresIn: '15s'})
        return res.status(200).json(token)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.get('/check', verify, async (req, res) => {
    try {
        res.status(201).json({confirmed: true})
    } catch (err) {
        return res.status(500).json(err)
    }
})


module.exports = router
