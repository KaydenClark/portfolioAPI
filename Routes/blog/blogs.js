const express = require('express')
const router = express.Router()

const {blogTitles} = require('../../dataAccess/blog/getBlogTitles')

router.get('/', async (req, res) =>{
    console.log('__________Get Request_________')
    let titles = await blogTitles()
    console.log(titles)
    res.send(titles)
})

router.post('/', async (req, res) =>{
    res.send('')
})

router.patch('/', async (req, res) =>{
    res.send('')
})

router.put('/', async (req, res) =>{
    res.send('')
})

router.delete('/', async (req, res) =>{
    res.send('')
})

module.exports = router