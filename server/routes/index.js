const router = require('express').Router()

router.use('/activities', require('./activities/activities.routes'))

module.exports = router
