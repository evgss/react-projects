const router = require('express').Router()
const News = require('../models/News')
const jwt = require('jsonwebtoken')
const verify = require('../middlewave/verify.middleware')


router.post('/', verify, async (req, res) => {
    if (req.token) {
        try {
            const newNews = await new News({
                title: req.body.title,
                text: req.body.text
            }).save()
            return res.status(200).json(newNews)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
})

router.get('/', async (req, res) => {
    try {
        const allNews = await News.find().sort({createdAt: -1})
        return res.status(200).json(allNews)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id)
        return res.status(200).json(news)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/:id', verify, async (req, res) => {
    if (req.token) {
        try {
            const updatedNews = await News.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            return res.status(200).json(updatedNews)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
})

router.delete('/:id', verify, async (req, res) => {
    if (req.token) {
        try {
            const newsToDelete = await News.findById(req.params.id)
            newsToDelete.deleteOne()
            return res.status(200).json(newsToDelete)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
})

module.exports = router
