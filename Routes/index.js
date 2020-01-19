
const express = require('express');
const cors = require('cors')
const router = express.Router();

router.use(cors())
router.use(express.json())

router.use('/images', require('./images/images'))

router.get('/test', (req, res) =>{
    res.send('Hello World')
})

module.exports = router