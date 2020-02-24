const express = require('express')
const router = express.Router()

const {readBlogs} = require('../../DataAccess/blogs/readBlogs')

router.get('/', async (req, res) => {
    // console.log('requesting...')
    const posts = await readBlogs()
    res.send(posts)
})

module.exports = router