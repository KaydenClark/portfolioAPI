
const express = require('express');
const cors = require('cors')
const router = express.Router();

router.use(cors())
router.use(express.json())

// router.use('/assets', require('./assets/images'))
router.use('/blog', require('./blog/blogs'))

router.get('/test', (req, res) =>{
    res.send('Hello World')
})

module.exports = router