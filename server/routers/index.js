const router = require('express').Router()
const Controller = require('../controllers/user')

router.post('/register', Controller.Register )
router.post('/login', Controller.Login )

module.exports = router