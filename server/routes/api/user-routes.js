const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    login
} = require('../../controllers//user-controllers');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware);
router.route('/me').get(authMiddleware, getSingleUser);
router.route('/login').post(login);

module.exports = router;