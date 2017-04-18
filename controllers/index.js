var express = require('express')
var router = express.Router()
var path = require('path')

router.use('/api/players', require('./players'));



module.exports = router