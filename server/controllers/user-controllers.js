const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res) {
        const findUser = await User.findOne({
            $or: [{ _id: user ? user._id: params.id },
            { username: params.username }]
        });
        if (!findUser) {
            return res.status(400).json({ message: 'User not found!'});
        }
        res.json(findUser);
    },
    async createUser({ body }, res) {
        const user = await User.create(body);
        if (!user) {
            return res.status(400).json({ message: 'Error...! Bugged...!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    async login({ body }, res) {
        const user = await User.findOne({
            $or: [{ username: body.username },
            { email: body.email }]
        });
        if (!user) {
            return res.status(400).json({ message: 'User not Found!' });
        }
        const correctPassword = await user.isCorrectPassword(body.password);
        if (!correctPassword) {
            return res.status(400).json({ message: 'Wrong Password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    }
};