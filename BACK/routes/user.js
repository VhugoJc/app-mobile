const {Router} = require('express');
const { postUser } = require('../controllers/user');
const router = Router();
// address: /api/user

router.get('/',postUser);

module.exports = router;