const router = require('express').Router()


router.get('/dogs', (req, res) =>{

    res.send('sending dogs api...')
})

module.exports = router;