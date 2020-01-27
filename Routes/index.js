
const express = require('express');
const cors = require('cors')
const router = express.Router();

router.use(cors())
router.use(express.json())

router.use('/pics', require('./pics/pics'))
router.use('/blogs', require('./blogs/blogs'))

router.get('/test', (req, res) =>{
    res.send('Hello World')
})

module.exports = router