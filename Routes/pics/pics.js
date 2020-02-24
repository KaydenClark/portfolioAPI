const express = require('express')
const router = express.Router()

const {readPics} = require('../../DataAccess/pics/readPics')

router.get('/', async (req, res) => {
    // console.log('requesting...')
    const imgs = readPics()
    res.send(imgs)
})

module.exports = router