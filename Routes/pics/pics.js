const express = require('express')
const router = express.Router()

// const {readBlogs} = require('../../DataAccess/blogs/readBlogs')

router.get('/', async (req, res) => {
    // console.log('requesting...')
    const imgs = "hello world"
    res.send(imgs)
})

module.exports = router